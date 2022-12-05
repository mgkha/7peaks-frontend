import { createContext, Dispatch, SetStateAction, useState } from "react";

export const LoadingContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

type LoadingProviderProps = {
  children: React.ReactNode;
};

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {children}
    </LoadingContext.Provider>
  );
};
