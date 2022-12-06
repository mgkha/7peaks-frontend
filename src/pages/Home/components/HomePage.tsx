import { Spinner } from "@/components/Elements";
import { ActionGroup } from "@/components/Elements/ActionGroup/ActionGroup";
import { ContentLayout } from "@/components/Layout";
import { useState } from "react";
import { useTopArticles } from "../api/getArticles";
import { ArticlesList } from "./ArticlesList";

export const HomePage = () => {
  const [orderBy, setOrderBy] = useState("newest");
  const newsQuery = useTopArticles({ section: "news", orderBy });
  const sportQuery = useTopArticles({ section: "sport", orderBy });
  const cultureQuery = useTopArticles({ section: "culture", orderBy });
  const lifeStyleQuery = useTopArticles({ section: "lifeandstyle", orderBy });

  if (
    newsQuery.isLoading ||
    sportQuery.isLoading ||
    cultureQuery.isLoading ||
    lifeStyleQuery.isLoading
  ) {
    return <Spinner />;
  }

  return (
    <ContentLayout title="Top stories">
      <ActionGroup orderBy={orderBy} handleOnChangeOrderBy={setOrderBy} />
      <ArticlesList
        articles={newsQuery.data}
        categoryNews={[
          { categoryName: "sport", results: sportQuery.data },
          { categoryName: "culture", results: cultureQuery.data },
          { categoryName: "lifestyle", results: lifeStyleQuery.data },
        ]}
      />
    </ContentLayout>
  );
};
