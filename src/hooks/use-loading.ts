import { LoadingContext } from "@/providers/loading";
import { useContext } from "react";

export const useLoading = () => {
  return useContext(LoadingContext);
};
