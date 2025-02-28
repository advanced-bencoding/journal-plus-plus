import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entriesTable = sqliteTable("entries", {
    entryId: integer().primaryKey({ autoIncrement: true }),
    title: text(),
    date: text().notNull(),
    content: text().notNull(),
});
