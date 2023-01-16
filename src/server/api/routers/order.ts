import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const orderRouter = createTRPCRouter({
  addProductToOrder: publicProcedure
    .input(
      z.object({
        account: z.string(),
        subtotal: z.number(),
        taxes: z.number(),
        total: z.number(),
        items: z.array(
          z.object({
            quantity: z.number(),
            price: z.number(),
            product: z.object({
              id: z.string(),
            }),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const account = await ctx.prisma.account.findUnique({
        where: {
          name: input.account,
        },
      });

      if (!account) {
        return { success: false };
      }

      const order = await ctx.prisma.order.create({
        data: {
          account: {
            connect: {
              id: account.id,
            },
          },
          subtotal: input.subtotal,
          taxes: input.taxes,
          total: input.total,
          items: {
            create: input.items.map((item) => ({
              price: item.price,
              quantity: item.quantity,
              product: { connect: { id: item.product.id } },
            })),
          },
        },
      });

      if (!order) {
        return { success: false };
      }

      return { success: true, order };
    }),
});
