import { Spinner } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { ArticlePage } from "@/pages/Article/components/ArticlePage";
import { BookmarksPage } from "@/pages/Bookmark/components/BookmarksPage";
import { HomePage } from "@/pages/Home/components/HomePage";
import { SearchPage } from "@/pages/Search/components/SearchPage";
import { Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/bookmarks",
          element: <BookmarksPage />,
        },
        { path: "/search", element: <SearchPage /> },
        { path: "/article", element: <ArticlePage /> },
      ],
    },
  ]);

  return <>{element}</>;
};
