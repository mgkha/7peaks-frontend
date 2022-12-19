import { ArticleCard, ArticleCardThumbnail } from "@/components/Elements";
import { Article, Category } from "@/pages/Article";
import { createSearchParams } from "react-router-dom";
import {
  a1,
  a2,
  a3,
  a4,
  a5,
  articleContainer,
  articleSection,
  articleSplitContainer,
  categoryContainer,
  categorySection,
  categoryTitle,
} from "../styles/articleslist.css";

type ArticlesListProps = {
  articles: Article[];
  categoryNews: Category[];
};

export const ArticlesList = ({ articles, categoryNews }: ArticlesListProps) => {
  return (
    <div>
      <div className={articleSection}>
        <div className={articleContainer}>
          {articles.map(({ id, webTitle, fields }: Article) => (
            <ArticleCardThumbnail
              key={id}
              link={`/article?${createSearchParams({ id }).toString()}`}
              title={webTitle}
              trailText={fields.trailText}
              thumbnail={fields.thumbnail}
            />
          ))}
        </div>

        <div className={articleSplitContainer}>
          <div className={a1}>
            {articles[0] && (
              <ArticleCardThumbnail
                key={articles[0].id}
                link={`/article?${createSearchParams({
                  id: articles[0].id,
                }).toString()}`}
                title={articles[0].webTitle}
                trailText={articles[0].fields.trailText}
                thumbnail={articles[0].fields.thumbnail}
              />
            )}
          </div>
          <div className={a2}>
            <div className={a4}>
              {articles[1] && (
                <ArticleCardThumbnail
                  key={articles[1].id}
                  link={`/article?${createSearchParams({
                    id: articles[1].id,
                  }).toString()}`}
                  title={articles[1].webTitle}
                  thumbnail={articles[1].fields.thumbnail}
                />
              )}
              {articles[2] && (
                <ArticleCardThumbnail
                  key={articles[2].id}
                  link={`/article?${createSearchParams({
                    id: articles[2].id,
                  }).toString()}`}
                  title={articles[2].webTitle}
                  thumbnail={articles[2].fields.thumbnail}
                />
              )}
            </div>
            <div className={a5}>
              {articles[3] && (
                <ArticleCard
                  key={articles[3].id}
                  link={`/article?${createSearchParams({
                    id: articles[3].id,
                  }).toString()}`}
                  title={articles[3].webTitle}
                />
              )}
              {articles[4] && (
                <ArticleCard
                  key={articles[4].id}
                  link={`/article?${createSearchParams({
                    id: articles[4].id,
                  }).toString()}`}
                  title={articles[4].webTitle}
                />
              )}
            </div>
          </div>
          <div className={a3}>
            {articles
              .slice()
              .splice(5, 3)
              .map(({ id, webTitle, fields }: Article) => (
                <ArticleCardThumbnail
                  key={id}
                  link={`/article?${createSearchParams({ id }).toString()}`}
                  title={webTitle}
                  trailText={fields.trailText}
                  thumbnail={fields.thumbnail}
                />
              ))}
          </div>
        </div>
      </div>

      {categoryNews.map((categoryNew: Category) => (
        <div key={categoryNew.categoryName} className={categorySection}>
          <h1 className={categoryTitle}>{categoryNew.categoryName}</h1>
          <div className={categoryContainer}>
            {categoryNew.results.map(({ id, webTitle, fields }: Article) => (
              <ArticleCardThumbnail
                key={id}
                link={`/article?${createSearchParams({ id }).toString()}`}
                title={webTitle}
                thumbnail={fields.thumbnail}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
