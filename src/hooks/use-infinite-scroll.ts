import { useCallback, useEffect, useState } from "react";

type UseInfiniteScrollProps = {
  onScrollCallback: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
};

const useInfiniteScroll = ({
  onScrollCallback,
  isFetchingNextPage,
  hasNextPage,
}: UseInfiniteScrollProps) => {
  const [doScroll, setDoScroll] = useState<boolean>(false);

  const isScrolling = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.offsetHeight &&
      isFetchingNextPage === false &&
      hasNextPage
    ) {
      setDoScroll(true);
    }
  }, [hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (isFetchingNextPage === false) setDoScroll(false);
  }, [isFetchingNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [isScrolling]);

  useEffect(() => {
    if (doScroll) onScrollCallback();
  }, [doScroll, onScrollCallback]);
};
export default useInfiniteScroll;
