import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./server/api/root";
import { z } from "zod";
import { RouterOutputs } from "./utils/api";

type routerOutputs = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutputs["todo"]["all"];

export type Todo = allTodosOutput[number];

export const noteInput = z.string({
    required_error: 'Describe your note',
})
.min(1)
.max(50);