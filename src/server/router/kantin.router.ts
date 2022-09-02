import { z } from "zod";
import { createRouter } from "./context";
import { TRPCError } from "@trpc/server";

export const kantinRouter = createRouter()
.query('get-all-kantin', {
    resolve: async ({ctx}) => {
        const canteens = ctx.prisma.kantin.findMany({
            include: {
              _count: {
                select: {
                    Review: true
                }
              },
              faculty: {
                select: {
                    name: true
                }
              }
            }
        })
        return canteens
    }
})
.query("get-faculties", {
    resolve: async ({ctx}) => {

        const faculties = await ctx.prisma.faculty.findMany()

        return faculties
    }
})
.query("get-kantin-by-faculty", {
    input: z.object({
        faculty: z.string().nullish()
    }),
    resolve: async ({ctx, input}) => {
        if (!input.faculty) {
            throw new TRPCError({code: "BAD_REQUEST", message: "No faculty was included"})
        }

        const faculty = await ctx.prisma.faculty.findFirst({
            where: {
                name: input.faculty
            },
            include: {
                Kantin: {
                    include: {
                        _count: {
                            select: {
                                Review: true
                            }
                        }
                    }
                }
            }
        })

        if (!faculty) {
            throw new TRPCError({code: "BAD_REQUEST"})
        }

        return faculty
    }
})
.query('get-canteen', {
    input: z.object({
        name: z.string().nullish()
    }),
    resolve: async ({ctx, input}) => {
        if (!input.name) {
            throw new TRPCError({code: "BAD_REQUEST", message: "No faculty was included"})
        }

        const kantin = await ctx.prisma.kantin.findFirst({
            where: {
                name: input.name
            },
            include: {
                faculty: {
                    select: {
                        name: true,
                        logo: true
                    }
                },
                Review: {
                    include: {
                        _count: {
                            select: {
                                Upvotes: true,
                                Downvotes: true
                            }
                        }
                    },
                    orderBy: {
                        score: 'desc'
                    }
                }
            },
            
        })
        return kantin
    }
})