import { Snackbar } from "@/components/Elements";
import { createContext, createRef, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_SNACKBAR_TIMEOUT_MS = 1500;

export default function reducer(
  state: SnackbarMessage[],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "append":
      action.payload.id = uuidv4();
      return [...state, action.payload];
    case "remove":
      return state.filter(({ id }) => id !== action.payload);
    default:
      throw new Error();
  }
}

export type SnackbarMessage = {
  id?: string;
  message: string;
  timeout?: number;
  nodeRef?: React.Ref<HTMLDivElement>;
};

export interface ISnackbarContext {
  snackbarMessages: SnackbarMessage[];
  addSnackbarMessage: (snackbarMessage: SnackbarMessage) => void;
  removeSnackbarMessage: (id: string) => void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
  snackbarMessages: [],
  addSnackbarMessage: () => {},
  removeSnackbarMessage: () => {},
});

type SnackbarProviderProps = {
  children: React.ReactNode;
};

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addSnackbarMessage = ({
    message,
    timeout = DEFAULT_SNACKBAR_TIMEOUT_MS,
  }: SnackbarMessage) => {
    dispatch({
      type: "append",
      payload: { message, timeout, nodeRef: createRef<Node>() },
    });
  };

  const removeSnackbarMessage = (id: string) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <SnackbarContext.Provider
      value={{
        snackbarMessages: state,
        addSnackbarMessage,
        removeSnackbarMessage,
      }}
    >
      <Snackbar snackbarMessages={state} />
      {children}
    </SnackbarContext.Provider>
  );
};
