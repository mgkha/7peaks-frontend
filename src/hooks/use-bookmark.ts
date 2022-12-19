import { useCallback, useEffect, useState } from "react";
import { useSnackbar } from "./use-snackbar";
const bookmarkField = "bookmarks";

export type Bookmark = {
  id: string;
  webTitle: string;
  webPublicationDate: string;
  trailText: string;
  thumbnail: string;
};

const getBookmarksFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(bookmarkField) || "[]");
  } catch (_err) {
    return [];
  }
};

const useBookmark = () => {
  const { addSnackbarMessage } = useSnackbar();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(
    getBookmarksFromLocalStorage()
  );

  // persist through tabs
  useEffect(() => {
    window.onstorage = () => {
      setBookmarks(getBookmarksFromLocalStorage());
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(bookmarkField, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = ({
    id,
    webTitle,
    webPublicationDate,
    trailText,
    thumbnail,
  }: Bookmark) => {
    setBookmarks([
      ...bookmarks,
      { id, webTitle, webPublicationDate, trailText, thumbnail },
    ]);
    addSnackbarMessage({ message: "Bookmark Added" });
  };

  const removeBookmark = (id: string) => {
    let index = bookmarks.findIndex((pd) => pd.id === id);

    if (index > -1) bookmarks.splice(index, 1);

    setBookmarks([...bookmarks]);
    addSnackbarMessage({ message: "Bookmark Removed" });
  };

  const hasBookmark = useCallback(
    (id: string) => {
      return bookmarks.findIndex((pd) => pd.id === id) !== -1;
    },
    [bookmarks]
  );

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    hasBookmark,
  };
};

export default useBookmark;
