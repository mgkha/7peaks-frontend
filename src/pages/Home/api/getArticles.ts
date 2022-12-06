import { useQuery } from "@tanstack/react-query";

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

export const getArticles = async (
  section: string,
  pageSize: number,
  orderBy: string
): Promise<Article[]> => {
  const { data } = await axios.get<ResponseData>(`/search`, {
    params: {
      section,
      page: 1,
      "page-size": pageSize,
      "show-fields": "thumbnail,headline,trailText",
      "order-by": orderBy,
    },
  });
  return data.response.results;
};

type QueryFnType = typeof getArticles;

type UseArticlesOptions = {
  section: string;
  orderBy: string;
};

export const useTopArticles = ({ section, orderBy }: UseArticlesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`articles`, { section, orderBy }],
    queryFn: () => getArticles(section, 8, orderBy),
  });
};
