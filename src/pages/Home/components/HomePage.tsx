import getTopStories from "@/actions/getTopStories";
import { ActionGroup } from "@/components/Elements/ActionGroup/ActionGroup";
import { ContentLayout, MainLayout } from "@/components/Layout";
import { useLoading } from "@/hooks/use-loading";
import { useEffect, useState } from "react";
import { Article, Category } from "../types";
import { ArticlesList } from "./ArticlesList";

const sections = ["sport", "culture", "lifeandstyle"];

export const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [orderBy, setOrderBy] = useState("newest");
  const [, setLoading] = useLoading();
  const [categoryNews, setCategoryNews] = useState<Category[]>([]);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      getTopStories({ orderBy }).then(({ results }) => setArticles(results)),
      Promise.all([
        ...sections.map((section) =>
          getTopStories({ section, pageSize: 3, orderBy })
        ),
      ]).then((response) => {
        setCategoryNews(
          response.map(({ results }, index) => ({
            categoryName: sections[index],
            results,
          }))
        );
      }),
    ]).then(() => setLoading(false));
  }, [orderBy, setLoading]);

  return (
    <MainLayout>
      <ContentLayout title="Top stories">
        <ActionGroup orderBy={orderBy} handleOnChangeOrderBy={setOrderBy} />
        <ArticlesList articles={articles} categoryNews={categoryNews} />
      </ContentLayout>
    </MainLayout>
  );
};
