import { useCallback, useEffect, useState } from "react";
import { useSnackbar } from "./use-snackbar";
const bookmarkField = "bookmarks";

const getBookmarksFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(bookmarkField) || "[]");
  } catch (_err) {
    return [];
  }
};

const useBookmark = () => {
  const { addSnackbarMessage } = useSnackbar();
  const [bookmarks, setBookmarks] = useState(getBookmarksFromLocalStorage());

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
  }: any) => {
    setBookmarks([
      ...bookmarks,
      { id, webTitle, webPublicationDate, trailText, thumbnail },
    ]);
    addSnackbarMessage({ message: "Bookmark Added" });
  };

  const removeBookmark = (id: string) => {
    let index = bookmarks.findIndex((pd: any) => pd.id === id);

    if (index > -1) bookmarks.splice(index, 1);

    setBookmarks([...bookmarks]);
    addSnackbarMessage({ message: "Bookmark Removed" });
  };

  const hasBookmark = useCallback(
    (id: any) => {
      return bookmarks.findIndex((pd: any) => pd.id === id) !== -1;
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
