import ColorLib from "@/utils/color";
import { Link } from "react-router-dom";
import { newsTitle, newsWrapper } from "./style.css";

type ArticleCardProps = {
  link: string;
  title: string;
};

export const ArticleCard = ({ link, title }: ArticleCardProps) => {
  return (
    <Link
      to={link}
      className={newsWrapper}
      style={{
        borderBottom: `3px solid ${ColorLib.stringToColor(title)}`,
      }}
    >
      <h2 className={newsTitle}>{title}</h2>
    </Link>
  );
};
