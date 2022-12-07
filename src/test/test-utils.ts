import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FunctionComponent } from "react";

import { AppProvider } from "@/providers/app";

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByTestId(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    { timeout: 4000 }
  );

// eslint-disable-next-line import/export
export const render = async (
  ui: any,
  { route = "/", ...renderOptions }: Record<string, any> = {}
) => {
  window.history.pushState({}, "Test page", route);

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: AppProvider as FunctionComponent<unknown>,
      ...renderOptions,
    }),
  };

  // await waitForLoadingToFinish();

  return returnValue;
};

// eslint-disable-next-line import/export
export * from "@testing-library/react";
export { userEvent, rtlRender };
