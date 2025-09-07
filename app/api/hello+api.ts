import { db } from "@/db";
import { usersTable } from "@/db/schema";

export async function GET(request: Request) {


    

  const asd =  await db.select().from(usersTable)

  console.log("USERS", asd)

  return Response.json({ hello: 'world' });
}