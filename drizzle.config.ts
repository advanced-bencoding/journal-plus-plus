import type { Config } from "drizzle-kit";

export default {
  schema: "./data/sources/schema.ts",
  out: "./data/migrations",
  dialect: "sqlite",
  driver: "expo",
} satisfies Config;
