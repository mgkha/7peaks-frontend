import { useCallback, useEffect, useState } from "react";

const useInfiniteScroll = ({ onScrollCallback, hasMore }: any) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const isScrolling = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.offsetHeight &&
      hasMore
    ) {
      setIsFetching(true);
    }
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [isScrolling]);

  useEffect(() => {
    if (isFetching) onScrollCallback();
  }, [isFetching, onScrollCallback]);

  return [isFetching, setIsFetching] as const;
};
export default useInfiniteScroll;
