import { TextEncoder, TextDecoder } from "util";

// eslint-disable-next-line no-undef
global.TextEncoder = TextEncoder;
// eslint-disable-next-line no-undef
global.TextDecoder = TextDecoder;

import { setupServer } from "msw/node"
import { handlers } from "./handlers"

export const server = setupServer(...handlers);
