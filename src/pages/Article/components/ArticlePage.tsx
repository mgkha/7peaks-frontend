import { ContentLayout } from "@/components/Layout";
import useBookmark from "@/hooks/use-bookmark";
import { useSearchParams } from "react-router-dom";
import { BsBookmarkDashFill, BsBookmarkFill } from "react-icons/bs";
import {
  articleContent,
  bookmarkBtn,
  bookmarkIcon,
  contentBody,
  contentDate,
  contentDivider,
  contentFigure,
  contentTitle,
  contentWrapper,
  mobile,
} from "../styles/index.css";
import { useArticle } from "../api/getArticle";
import { Spinner } from "@/components/Elements";

export const ArticlePage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";
  const { addBookmark, removeBookmark, hasBookmark } = useBookmark();
  const articleQuery = useArticle(id);

  if (articleQuery.isLoading) {
    return <Spinner />;
  }

  const handleOnAddBookmark = () => {
    if (articleQuery.data)
      addBookmark({
        id: articleQuery.data?.id,
        webTitle: articleQuery.data?.webTitle,
        webPublicationDate: articleQuery.data?.webPublicationDate,
        trailText: articleQuery.data?.fields.trailText,
        thumbnail: articleQuery.data?.fields.thumbnail,
      });
  };

  const handleOnRemoveBookmark = () => {
    if (articleQuery.data) removeBookmark(articleQuery.data?.id);
  };

  return (
    <ContentLayout>
      {articleQuery.data && (
        <div className={articleContent}>
          {/* <img className="content-image" src={articleQuery.data?.fields.thumbnail} /> */}
          <div
            className={`${contentFigure} ${mobile}`}
            dangerouslySetInnerHTML={{
              __html: articleQuery.data?.fields.main,
            }}
          />
          <div className={contentWrapper}>
            <div className={contentTitle}>
              {hasBookmark(articleQuery.data?.id) ? (
                <button
                  className={bookmarkBtn}
                  onClick={handleOnRemoveBookmark}
                >
                  <BsBookmarkDashFill />
                  <span>Remove Bookmark</span>
                </button>
              ) : (
                <button className={bookmarkBtn} onClick={handleOnAddBookmark}>
                  <BsBookmarkFill />
                  <span>Add Bookmark</span>
                </button>
              )}

              <div className={contentDate}>
                <span>
                  {new Date(
                    articleQuery.data?.webPublicationDate
                  ).toUTCString()}
                </span>
                {hasBookmark(articleQuery.data?.id) ? (
                  <BsBookmarkDashFill
                    className={`${bookmarkIcon} ${mobile}`}
                    onClick={handleOnRemoveBookmark}
                  />
                ) : (
                  <BsBookmarkFill
                    className={`${bookmarkIcon} ${mobile}`}
                    onClick={handleOnAddBookmark}
                  />
                )}
              </div>

              <h1>{articleQuery.data?.webTitle}</h1>
              <h2>{articleQuery.data?.fields.trailText}</h2>
            </div>

            <span className={contentDivider} />
            <div className={contentBody}>
              <div className="content-text">
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: articleQuery.data?.fields.body,
                    }}
                  />
                }
              </div>
              <div
                className={contentFigure}
                dangerouslySetInnerHTML={{
                  __html: articleQuery.data?.fields.main,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </ContentLayout>
  );
};
