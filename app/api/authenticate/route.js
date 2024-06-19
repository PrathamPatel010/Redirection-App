export async function POST(req, res) {
    const {password} = await req.json();
    const actualPassword = process.env.PASSWORD;
    const superUserPassword = process.env.SUPER_USER_PASSWORD;
    console.log(actualPassword,superUserPassword,password);
    if (password === actualPassword) {
        return Response.json({ statusCode:200, status: "User", isAuthenticated: true, isSuperUser: false });
    } else if (password === superUserPassword) {
        return Response.json({ statusCode:200, status:"Super User", isAuthenticated: true, isSuperUser: true });
    } else {
        return Response.json({ statusCode:401, status:"Unauthorized", message: "It's wrong password you trespasser" })
    }
}
