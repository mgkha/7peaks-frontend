import { AxiosError } from "axios";
import {
  QueryClient,
  UseQueryOptions,
  UseMutationOptions,
  DefaultOptions,
} from "@tanstack/react-query";
import { PromiseValue } from "type-fest";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: 10,
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours before stale,
    keepPreviousData: true,
    networkMode: "offlineFirst",
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: "react-query-persistance",
});
// const sessionStoragePersister = createSyncStoragePersister({ storage: window.sessionStorage })

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

export type ExtractFnReturnType<FnType extends (...args: any) => any> =
  PromiseValue<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >;
