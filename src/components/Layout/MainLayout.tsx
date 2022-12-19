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
import { useMounted } from "@/hooks/use-mounted";

type MainLayoutProps = {
  children: React.ReactNode;
};

const debounceTime = 2000;

export const MainLayout = ({ children }: MainLayoutProps) => {
  const searchRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading] = useLoading();
  const [searchValue, setSearchValue] = React.useState("");
  const isMounted = useMounted();

  const searchFn = React.useCallback(
    (q: string) => {
      if (location.pathname === "/search") {
        setSearchParams({ q });
      } else {
        navigate({
          pathname: "/search",
          search: createSearchParams({ q }).toString(),
        });
      }
    },
    [navigate, setSearchParams, location.pathname]
  );

  React.useEffect(() => {
    if (searchParams.toString() === "") setSearchValue("");
  }, [searchParams]);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (isMounted) {
        searchValue && searchFn(searchValue);
      }
    }, debounceTime);
    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [searchValue, isMounted, searchFn]);

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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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
