import { ArticleCardThumbnail } from "@/components/Elements";
import { createSearchParams } from "react-router-dom";
import {
  bookmarksContainer,
  bookmarksSection,
  noBookmarkText,
} from "../styles/bookmarks.css";

export const BookmarksList = ({ bookmarks, orderBy }: any) => {
  return (
    <div className={bookmarksSection}>
      <div className={bookmarksContainer}>
        {bookmarks.length > 0 ? (
          bookmarks
            .sort(
              (
                { webPublicationDate: a }: any,
                { webPublicationDate: b }: any
              ) =>
                orderBy === "newest"
                  ? new Date(b).getTime() - new Date(a).getTime()
                  : new Date(a).getTime() - new Date(b).getTime()
            )
            .map(({ id, webTitle, thumbnail }: any) => (
              <ArticleCardThumbnail
                key={id}
                link={`/article?${createSearchParams({ id }).toString()}`}
                title={webTitle}
                thumbnail={thumbnail}
              />
            ))
        ) : (
          <h3 className={noBookmarkText}>You don't have any bookmarks yet</h3>
        )}
      </div>
    </div>
  );
};
