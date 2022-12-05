import getTopStories from "@/actions/getTopStories";
import { ActionGroup } from "@/components/Elements/ActionGroup/ActionGroup";
import { ContentLayout, MainLayout } from "@/components/Layout";
import useInfiniteScroll from "@/hooks/use-infinite-scroll";
import { useLoading } from "@/hooks/use-loading";
import { Article } from "@/pages/Article";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResult } from "./SearchResults";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [searchResult, setSearchResult] = useState<Article[]>([]);
  const [orderBy, setOrderBy] = useState("newest");
  const [totalPages, setTotalPages] = useState(2);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useLoading();

  let hasMore = page <= totalPages;

  const [isFetching, setIsFetching] = useInfiniteScroll({
    onScrollCallback: () => {
      getTopStories({
        q,
        queryFields: "headline,webTitle,body,trailText",
        orderBy,
        pageSize: 15,
        page,
      }).then(({ results }) => {
        setSearchResult((prev) => [...prev, ...results]);
        setPage(page + 1);
        setIsFetching(false);
      });
    },
    hasMore,
  });

  useEffect(() => {
    setLoading(true);
    getTopStories({
      q,
      queryFields: "headline,webTitle,body,trailText",
      orderBy,
      pageSize: 15,
      page: 1,
    }).then(({ pages, results }) => {
      setTotalPages(pages);
      setSearchResult(results);
      setLoading(false);
    });
  }, [q, orderBy, setLoading]);

  return (
    <MainLayout>
      <ContentLayout title="Search result">
        <ActionGroup orderBy={orderBy} handleOnChangeOrderBy={setOrderBy} />
        <SearchResult
          loading={loading}
          searchResult={searchResult}
          isFetching={isFetching}
          hasMore={hasMore}
        />
      </ContentLayout>
    </MainLayout>
  );
};
