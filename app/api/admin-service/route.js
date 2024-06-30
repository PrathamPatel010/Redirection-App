import { PrismaClient } from '@prisma/client'

const prismaService = new PrismaClient();

export async function POST(req, res) {
    const {password,link,name,linkPrivate} = await req.json();
    const superUserPassword = process.env.SUPER_USER_PASSWORD;
    if (password !== superUserPassword) {
        return Response.json({ statusCode:401, status:"Unauthorized", message: "It's wrong password you trespasser" });
    }
    const response = await prismaService.link.create({
        data:{
            url:link,
            name:name,
            private:linkPrivate
        }
    });
    return Response.json({ statusCode:200, status:"Success", data:response ,message: "Link added" });
}