import "@testing-library/jest-dom";

import {server}  from "./mockes/node";

beforeAll(() => {
  // Start the interception.
  server.listen({ onUnhandledRequest: "bypass" })
})

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers()
})

afterAll(() => {
  // Disable request interception and clean up.
  server.close()
})
