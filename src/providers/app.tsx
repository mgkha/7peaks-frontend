import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/react-query";
import { Spinner, ErrorFallback } from "@/components/Elements";

type OfflineStatusProps = {
  isOffline: boolean;
};

const OfflineStatus = ({ isOffline }: OfflineStatusProps) => {
  return (
    <>{isOffline && <div className="offline-banner">You are offline</div>}</>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isOffline, setIsOffline] = React.useState(!navigator.onLine);

  // Listen for changes in the browser's online/offline status
  window.addEventListener("offline", () => setIsOffline(true));
  window.addEventListener("online", () => setIsOffline(false));

  return (
    <React.Suspense fallback={<Spinner />}>
      <OfflineStatus isOffline={isOffline} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
            <Router>{children}</Router>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
