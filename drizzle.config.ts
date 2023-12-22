import type { Config } from "drizzle-kit"
import { config } from "dotenv"
config({ path: ".env" })

export default {
  schema: "./src/supabase/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config
