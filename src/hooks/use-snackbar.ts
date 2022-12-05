import { SnackbarMessage, SnackbarContext } from "@/providers/snackbar";
import { useContext, useEffect } from "react";

export const useSnackbar = () => {
  const { snackbarMessages, addSnackbarMessage, removeSnackbarMessage } =
    useContext(SnackbarContext);

  useEffect(() => {
    snackbarMessages.forEach(({ id, timeout }: SnackbarMessage) => {
      setTimeout(() => {
        if (id) removeSnackbarMessage(id);
      }, timeout);
    });
  }, [snackbarMessages, removeSnackbarMessage]);

  return { addSnackbarMessage };
};
