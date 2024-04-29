import { z } from "zod";
import { noteInput } from "~/types";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({

  all: publicProcedure.query(async ({ ctx }) => {
    const todos = await ctx.db.todo.findMany();
    return todos.map(({ id, content, done }) => ({ id, content, done }));
  }),

  create: publicProcedure
    .input(noteInput)
    .mutation(({ ctx, input }) => {
      return ctx.db.todo.create({
        data: {
          content: input,
        },
      });
    }),

  delete: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
    return ctx.db.todo.delete({
      where: {
        id: input,
      },
    });
  }),

  toggle: publicProcedure.input(z.object({
    id: z.string(),
    done: z.boolean(),
    })
    ).mutation(async({ctx, input: {id, done}})=>{
      return ctx.db.todo.update({
        where: {
          id,
        },
        data: {
          done,
        }
    });
  }),


});
