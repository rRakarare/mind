import { db } from "@/db"; // your drizzle instance
import * as schema from "@/db/auth/schema";
import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [expo()],
  trustedOrigins: ["mind://"],
  emailAndPassword: {
    enabled: true, // Enable authentication using email and password.
  },
});
