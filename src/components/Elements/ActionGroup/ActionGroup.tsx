import { BsBookmarkFill, BsSortDown, BsSortUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
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
  handleOnChangeOrderBy: any;
};

export function ActionGroup({
  orderBy,
  handleOnChangeOrderBy,
}: ActionGroupProps) {
  const navigate = useNavigate();

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
        <BsBookmarkFill
          className={bookmarkIcon}
          onClick={() => navigate("/bookmarks")}
        />
      </div>

      <div className={actionGroup}>
        <button className={bookmarkBtn} onClick={() => navigate("/bookmarks")}>
          <BsBookmarkFill />
          <span>View Bookmark</span>
        </button>

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
