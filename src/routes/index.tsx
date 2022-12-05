import { ArticlePage } from "@/pages/Article/components/ArticlePage";
import { BookmarksPage } from "@/pages/Bookmark/components/BookmarksPage";
import { HomePage } from "@/pages/Home/components/HomePage";
import { SearchPage } from "@/pages/Search/components/SearchPage";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/bookmarks", element: <BookmarksPage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/article", element: <ArticlePage /> },
  ]);

  return <>{element}</>;
};
