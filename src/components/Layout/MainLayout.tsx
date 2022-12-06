import * as React from "react";
import {
  createSearchParams,
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  contentStyle,
  footerStyle,
  headerStyle,
  layoutStyle,
  logoStyle,
  mainStyle,
  navStyle,
  searchBoxStyle,
  searchButtonStyle,
  searchIconStyle,
  searchInputStyle,
} from "./styles/style.css";

import { CgSearch } from "react-icons/cg";
import { useLoading } from "@/hooks/use-loading";
import { Spinner } from "../Elements";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const searchRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();
  const [loading] = useLoading();
  return (
    <div className={layoutStyle}>
      <header className={headerStyle}>
        <nav className={navStyle}>
          <Link to="/">
            <div className={logoStyle}>The Peaks</div>
          </Link>

          <div className={searchBoxStyle}>
            <input
              ref={searchRef}
              type="text"
              className={searchInputStyle}
              placeholder="Search all news"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (location.pathname === "/search") {
                    setSearchParams({ q: e.currentTarget.value });
                  } else {
                    navigate({
                      pathname: "/search",
                      search: createSearchParams({
                        q: e.currentTarget.value,
                      }).toString(),
                    });
                  }
                }
              }}
            />
            <button
              className={searchButtonStyle}
              onClick={() => {
                searchRef.current?.focus();
              }}
            >
              <CgSearch className={searchIconStyle} />
            </button>
          </div>
        </nav>
      </header>
      <main className={mainStyle}>
        <div className={contentStyle}>{loading ? <Spinner /> : children}</div>
      </main>
      <footer className={footerStyle}></footer>
    </div>
  );
};
