import { useQueries, useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { Article } from "@/pages/Article";

export const getArticles = (
  section: string,
  pageSize: number,
  orderBy: string
): Promise<Article[]> => {
  return axios.get(`/search`, {
    params: {
      section,
      page: 1,
      "page-size": pageSize,
      "show-fields": "thumbnail,headline,trailText",
      "order-by": orderBy,
    },
  });
};

type QueryFnType = typeof getArticles;

type UseArticlesOptions = {
  orderBy: string;
};

export const useTopArticles = ({ orderBy }: UseArticlesOptions) => {
  return useQueries<ExtractFnReturnType<QueryFnType>>([
    {
      queryKey: ["articles_news"],
      queryFn: () => getArticles("news", 8, orderBy),
    },
    {
      queryKey: ["articles_sport"],
      queryFn: () => getArticles("sport", 8, orderBy),
    },
    {
      queryKey: ["articles_culture"],
      queryFn: () => getArticles("culture", 8, orderBy),
    },
    {
      queryKey: ["articles_lifeandstyle"],
      queryFn: () => getArticles("lifeandstyle", 8, orderBy),
    },
  ]);
};
