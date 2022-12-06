import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { Article } from "@/pages/Article";
import { ExtractFnReturnType } from "@/lib/react-query";

interface Response {
  status: string;
  userTier: string;
  total: number;
  content: Article;
}

interface ResponseData {
  response: Response;
}

export const getArticle = async (id: string): Promise<Article> => {
  const { data } = await axios.get<ResponseData>(`/${id}`, {
    params: {
      "show-fields": "all",
      "show-elements": "all",
    },
  });
  return data.response.content;
};

type QueryFnType = typeof getArticle;

export const useArticle = (id: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`article`, { id }],
    queryFn: () => getArticle(id),
  });
};
