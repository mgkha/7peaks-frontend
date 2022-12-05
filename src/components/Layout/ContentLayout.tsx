import * as React from "react";

import { Head } from "../Head";
import { pageContent } from "./styles/style.css";

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className={pageContent}>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </>
  );
};
