import { ArticleCardThumbnail, Spinner } from "@/components/Elements";
import { Article } from "@/pages/Article";
import { createSearchParams } from "react-router-dom";
import {
  categoryContainer,
  categorySection,
  endOfResult,
  scrollSpinner,
} from "../styles/index.css";

type SearchResultProps = {
  searchResult: Article[] | undefined;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
};

export const SearchResult = ({
  searchResult = [],
  isFetchingNextPage,
  hasNextPage,
}: SearchResultProps) => {
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
      {isFetchingNextPage ? (
        <Spinner className={scrollSpinner} />
      ) : (
        hasNextPage === false && (
          <div className={endOfResult}>End of Result</div>
        )
      )}
    </div>
  );
};
