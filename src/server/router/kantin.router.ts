import { z } from "zod";
import { createRouter } from "./context";


export const kantinRouter = createRouter()
.query('get-all-kantin', {
    resolve: async ({ctx}) => {
        const canteens = ctx.prisma.kantin.findMany()
        return canteens
    }
})
.query('get-canteen', {
    input: z.object({
        faculty: z.enum([
            "RIK",
            "FPSI",
            "FISIP",
            "FEB",
            "FH",
            "FMIPA",
            "FT",
            "FKM",
            "VOKASI",
            "FASILKOM_LAMA",
            "FASILKOM_BARU",
            "ASRAMA"
        ])
    }),
    resolve: async ({ctx, input}) => {
        const canteen = await ctx.prisma.kantin.findFirst({
            where: {
                faculty: input.faculty
            }
        })
        return canteen
    }
})