// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { kantinRouter } from "./kantin.router";
import { userRouter } from "./user.router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("kantin.", kantinRouter)
  .merge("user.", userRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
