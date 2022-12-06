import { ActionGroup } from "@/components/Elements";
import { ContentLayout } from "@/components/Layout";
import useBookmark from "@/hooks/use-bookmark";
import { useState } from "react";
import { BookmarksList } from "./BookmarksList";

export const BookmarksPage = () => {
  const { bookmarks } = useBookmark();

  const [orderBy, setOrderBy] = useState("newest");

  return (
    <ContentLayout title="All Bookmarks">
      <ActionGroup orderBy={orderBy} handleOnChangeOrderBy={setOrderBy} />
      <BookmarksList bookmarks={bookmarks} orderBy={orderBy} />
    </ContentLayout>
  );
};
