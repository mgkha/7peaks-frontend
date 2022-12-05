import { ArticleCardThumbnail, Spinner } from "@/components/Elements";
import { Article } from "@/pages/Article";
import { createSearchParams } from "react-router-dom";
import {
  categoryContainer,
  categorySection,
  scrollSpinner,
} from "../styles/index.css";

export const SearchResult = ({ searchResult, isFetching, hasMore }: any) => {
  return (
    <div className={categorySection}>
      <div className={categoryContainer}>
        {searchResult.map(({ id, webTitle, fields }: Article) => (
          <ArticleCardThumbnail
            key={id}
            link={`/article?${createSearchParams({ id }).toString()}`}
            title={webTitle}
            thumbnail={fields.thumbnail}
          />
        ))}
      </div>
      {isFetching ? (
        <Spinner className={scrollSpinner} />
      ) : (
        // <span style={{ fontSize: "3rem" }}>Loading ...</span>
        hasMore === false && (
          <span style={{ fontSize: "3rem" }}>End of Result</span>
        )
      )}
    </div>
  );
};
