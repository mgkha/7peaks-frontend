import { BsBookmarkFill, BsSortDown, BsSortUp } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import {
  actionGroup,
  bookmarkBtn,
  bookmarkIcon,
  actionGroupWrapper,
  mobileView,
  sortingIcon,
  sortingSelect,
} from "./style.css";

type ActionGroupProps = {
  orderBy: string;
  handleOnChangeOrderBy: (orderBy: string) => void;
};

export function ActionGroup({
  orderBy,
  handleOnChangeOrderBy,
}: ActionGroupProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={actionGroupWrapper}>
      <div className={mobileView}>
        {orderBy === "newest" ? (
          <BsSortUp
            className={sortingIcon}
            onClick={() => handleOnChangeOrderBy("oldest")}
          />
        ) : (
          <BsSortDown
            className={sortingIcon}
            onClick={() => handleOnChangeOrderBy("newest")}
          />
        )}
        {location.pathname !== "/bookmarks" && (
          <BsBookmarkFill
            className={bookmarkIcon}
            onClick={() => navigate("/bookmarks")}
          />
        )}
      </div>

      <div className={actionGroup}>
        {location.pathname !== "/bookmarks" && (
          <button
            className={bookmarkBtn}
            onClick={() => navigate("/bookmarks")}
          >
            <BsBookmarkFill />
            <span>View Bookmark</span>
          </button>
        )}

        <select
          className={sortingSelect}
          value={orderBy}
          onChange={(e) => handleOnChangeOrderBy(e.target.value)}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </div>
  );
}
