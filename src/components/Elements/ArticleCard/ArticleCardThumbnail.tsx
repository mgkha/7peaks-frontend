import ColorLib from "@/utils/color";
import { Link } from "react-router-dom";
import {
  newsThumbDescription,
  newsThumbThumbnail,
  newsThumbTitle,
  newsThumbTrail,
  newsThumbWrapper,
} from "./style.css";

type ArticleCardThumbnailProps = {
  link: string;
  title: string;
  trailText?: string;
  thumbnail?: string;
};

export const ArticleCardThumbnail = ({
  link,
  title,
  trailText,
  thumbnail,
}: ArticleCardThumbnailProps) => {
  return (
    <Link
      to={link}
      className={newsThumbWrapper}
      style={{
        borderBottom: `3px solid ${ColorLib.stringToColor(title)}`,
      }}
    >
      <img
        className={newsThumbThumbnail}
        alt="thumbnail"
        src={thumbnail || "/no-image.png"}
      />
      <div className={newsThumbDescription}>
        <div>
          <h2 className={newsThumbTitle}>{title}</h2>
          <p className={newsThumbTrail}>{trailText}</p>
        </div>
      </div>
    </Link>
  );
};
