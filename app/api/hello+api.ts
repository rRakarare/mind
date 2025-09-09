import { db } from "@/db";
import { user } from "@/db/auth/schema";

export async function GET(request: Request) {
  const asd = await db.select().from(user);

  console.log("USERS", asd);

  return Response.json({ hello: "world" });
}
