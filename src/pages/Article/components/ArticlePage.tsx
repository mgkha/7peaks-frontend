import getArticles from "@/actions/getArticles";
import { ContentLayout, MainLayout } from "@/components/Layout";
import useBookmark from "@/hooks/use-bookmark";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Article } from "../types";
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
import { useLoading } from "@/hooks/use-loading";

export const ArticlePage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [content, setContent] = useState<Article>();
  const { addBookmark, removeBookmark, hasBookmark } = useBookmark();
  const [, setLoading] = useLoading();

  useEffect(() => {
    setLoading(true);
    getArticles({ id }).then(({ content }) => {
      setContent(content);
      setLoading(false);
    });
  }, [id, setLoading]);

  const handleOnAddBookmark = () => {
    if (content)
      addBookmark({
        id: content.id,
        webTitle: content.webTitle,
        webPublicationDate: content.webPublicationDate,
        trailText: content.fields.trailText,
        thumbnail: content.fields.thumbnail,
      });
  };

  const handleOnRemoveBookmark = () => {
    if (content) removeBookmark(content.id);
  };

  return (
    <MainLayout>
      <ContentLayout>
        {content && (
          <div className={articleContent}>
            {/* <img className="content-image" src={content.fields.thumbnail} /> */}
            <div
              className={`${contentFigure} ${mobile}`}
              dangerouslySetInnerHTML={{
                __html: content.fields.main,
              }}
            />
            <div className={contentWrapper}>
              <div className={contentTitle}>
                {hasBookmark(content.id) ? (
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
                    {new Date(content.webPublicationDate).toUTCString()}
                  </span>
                  {hasBookmark(content.id) ? (
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

                <h1>{content.webTitle}</h1>
                <h2>{content.fields.trailText}</h2>
              </div>

              <span className={contentDivider} />
              <div className={contentBody}>
                <div className="content-text">
                  {
                    <div
                      dangerouslySetInnerHTML={{
                        __html: content.fields.body,
                      }}
                    />
                  }
                </div>
                <div
                  className={contentFigure}
                  dangerouslySetInnerHTML={{
                    __html: content.fields.main,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </ContentLayout>
    </MainLayout>
  );
};
