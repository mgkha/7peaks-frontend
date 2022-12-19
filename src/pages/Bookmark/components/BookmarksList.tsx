import { ArticleCardThumbnail } from "@/components/Elements";
import { Bookmark } from "@/hooks/use-bookmark";
import { createSearchParams } from "react-router-dom";
import {
  bookmarksContainer,
  bookmarksSection,
  noBookmarkText,
} from "../styles/bookmarks.css";

type BookmarksListProps = {
  bookmarks: Bookmark[];
  orderBy: string;
};

export const BookmarksList = ({ bookmarks, orderBy }: BookmarksListProps) => {
  return (
    <div className={bookmarksSection}>
      <div className={bookmarksContainer}>
        {bookmarks.length > 0 ? (
          bookmarks
            .sort(
              (
                { webPublicationDate: a }: Bookmark,
                { webPublicationDate: b }: Bookmark
              ) =>
                orderBy === "newest"
                  ? new Date(b).getTime() - new Date(a).getTime()
                  : new Date(a).getTime() - new Date(b).getTime()
            )
            .map(({ id, webTitle, thumbnail }: Bookmark) => (
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
