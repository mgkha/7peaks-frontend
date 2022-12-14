// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "@vanilla-extract/css/disableRuntimeStyles";

import { queryClient } from "@/lib/react-query";

// general cleanup
afterEach(async () => {
  queryClient.clear();
});
