import { useInfiniteQuery } from "react-query";

import { axios } from "@/lib/axios";
import { Article } from "@/pages/Article";
import { ExtractFnReturnType } from "@/lib/react-query";

interface Response {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: Article[];
}

interface ResponseData {
  response: Response;
}

export const getInfiniteArticles = async (
  q: string,
  queryFields: string,
  orderBy: string,
  pageSize: number,
  page: number
): Promise<Response> => {
  const { data } = await axios.get<ResponseData>(`/search`, {
    params: {
      q,
      queryFields,
      page: page,
      section: "news",
      "page-size": pageSize,
      "order-by": orderBy,
      "show-fields": "thumbnail,headline,trailText",
    },
  });
  return data.response;
};

type QueryFnType = typeof getInfiniteArticles;

type UseSearchArticlesOptions = {
  q: string;
  queryFields: string;
  pageSize: number;
  page: number;
  orderBy: string;
};

export const useSearchArticles = ({
  q,
  queryFields,
  orderBy,
  pageSize,
  page,
}: UseSearchArticlesOptions) => {
  return useInfiniteQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [
      `search_articles`,
      {
        q,
        queryFields,
        orderBy,
        pageSize,
        page,
      },
    ],
    queryFn: ({ pageParam = 1 }) =>
      getInfiniteArticles(q, queryFields, orderBy, 15, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      let nextPage = lastPage.currentPage + 1;
      if (nextPage <= lastPage.pages) return nextPage;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      let prevPage = firstPage.currentPage - 1;
      if (prevPage > 1) return prevPage;
    },
  });
};
