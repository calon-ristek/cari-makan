import { z } from "zod";
import { createRouter } from "./context";
import { Kantin, Review, Spot } from "@prisma/client";
import { getEnumKeyByEnumValue } from "src/utils/getEnumKeyByValue";
import { TRPCError } from "@trpc/server";

export const kantinRouter = createRouter()
.query('get-all-kantin', {
    resolve: async ({ctx}) => {
        const canteens = ctx.prisma.kantin.findMany()
        return canteens
    }
})
.query('get-canteen', {
    input: z.object({
        faculty: z.string().nullish()
    }),
    resolve: async ({ctx, input}) => {

        const spot = getEnumKeyByEnumValue(Spot, input.faculty)

        if (!spot) {
            throw new TRPCError({code: "BAD_REQUEST"})
        }
        
        const canteen = await ctx.prisma.kantin.findFirst({
            where: {
                faculty: spot as Spot
            },
            include: {
                Review: {
                    include: {
                        _count: {
                            select: {
                                Upvotes: true,
                                Downvotes: true
                            }
                        }
                    }
                }
            }
        })
        return canteen
    }
})