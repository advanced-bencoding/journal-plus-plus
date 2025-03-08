import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entriesTable = sqliteTable("entries", {
    entryId: integer().notNull().primaryKey({ autoIncrement: true }),
    title: text(),
    dateCreated: text().notNull(),
    dateModified: text().notNull(),
    content: text().notNull(),
});
