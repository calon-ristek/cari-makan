import { z } from "zod";
import { createProtectedRouter } from "./protected-router";


export const userRouter = createProtectedRouter()
.query("get-profile", {
    resolve: ({ctx}) => {
        const profile = ctx.prisma.user.findFirst({
            where: {
                name: ctx.session.user.name
            }
        })
        return profile
    }
})
.mutation("edit-profile", {

    input: z.object({
        name: z.string(),
        jurusan: z.string(),
        fakultas: z.string(),
        angkatan: z.number()
    }),

    resolve: async ({ctx}) => {

        await ctx.prisma.user.update({
            where: {
                id: ctx.session.user.id
            },
            data: {

            }
        })

        return {
            message: "Profil berhasil diganti!"
        }
    }
})
.query("get-bookmarked", {
    resolve: async ({ctx}) => {
        const bookmark = await ctx.prisma.bookmark.findUnique({
            where: {
                userId: ctx.session.user.id
            }
        })
        const savedKantin = await ctx.prisma.kantin.findMany({
            where: {
                bookmarkId: bookmark?.id
            },
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
        
        return savedKantin
    }
})
