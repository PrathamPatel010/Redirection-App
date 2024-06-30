import { PrismaClient } from '@prisma/client'

const prismaService = new PrismaClient();

export async function GET(req, res) {
    const response = await prismaService.link.findMany();
    return Response.json({ statusCode:200, status:"Success", data:response ,message: "Link added" });
}