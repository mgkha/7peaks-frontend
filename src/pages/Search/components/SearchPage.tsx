import { ActionGroup } from "@/components/Elements/ActionGroup/ActionGroup";
import { ContentLayout } from "@/components/Layout";
import useInfiniteScroll from "@/hooks/use-infinite-scroll";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchArticles } from "../api/searchArticles";
import { SearchResult } from "./SearchResults";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const [orderBy, setOrderBy] = useState("newest");

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSearchArticles({
      q,
      queryFields: "headline,webTitle,body,trailText",
      orderBy,
      pageSize: 15,
      page: 1,
    });

  const onScrollCallback = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useInfiniteScroll({ onScrollCallback, isFetchingNextPage, hasNextPage });

  return (
    <ContentLayout title="Search result">
      <ActionGroup orderBy={orderBy} handleOnChangeOrderBy={setOrderBy} />
      <SearchResult
        searchResult={data?.pages.map((page) => page.results).flat()}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
    </ContentLayout>
  );
};
