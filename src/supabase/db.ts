import postgres from "postgres"
import * as schema from "./schema"

import { drizzle } from "drizzle-orm/postgres-js"
// import { config } from 'dotenv'

const client = postgres(process.env.DATABASE_URL!, { max: 1 })
export const db = drizzle(client, { schema })
