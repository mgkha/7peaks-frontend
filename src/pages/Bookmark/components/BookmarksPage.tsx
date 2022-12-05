import { ActionGroup } from "@/components/Elements/ActionGroup/ActionGroup";
import { ContentLayout, MainLayout } from "@/components/Layout";
import useBookmark from "@/hooks/use-bookmark"; 
import { useState } from "react";
import { BookmarksList } from "./BookmarksList";

export const BookmarksPage = () => {
  const { bookmarks } = useBookmark();

  const [orderBy, setOrderBy] = useState("newest");

  return (
    <MainLayout>
      <ContentLayout title="All Bookmarks">
        <ActionGroup orderBy={orderBy} handleOnChangeOrderBy={setOrderBy} />
        <BookmarksList bookmarks={bookmarks} orderBy={orderBy} />
      </ContentLayout>
    </MainLayout>
  );
};
