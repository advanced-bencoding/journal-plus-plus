import { Entry } from "@/domain/models/entry";
import { eq, desc } from "drizzle-orm";
import db from "../sources/drizzleClient/SQLiteDatabase";
import { entriesTable } from "../sources/drizzleClient/schema";

export const EntryRepository = {
    saveEntry: async (entry: Entry) => {
        const dbEntry = {
            entryId: entry.entryId,
            title: entry.title,
            content: entry.content,
            dateCreated: entry.dateCreated,
            dateModified: entry.dateModified
        };
        if (entry.entryId === undefined){
            await db
                .insert(entriesTable)
                .values(dbEntry);
        }
        else {
            await db
                .update(entriesTable)
                .set(entry)
                .where(eq(entriesTable.entryId, entry.entryId))
        }
    },
    getAllEntries: async (): Promise<Entry[]> => {
        const allEntries = await db.select().from(entriesTable).orderBy(desc(entriesTable.dateModified));
        return allEntries.map((entry) => ({
            entryId: entry.entryId,
            title: entry.title ?? undefined,
            content: entry.content,
            dateCreated: entry.dateCreated,
            dateModified: entry.dateModified
        }) satisfies Entry)
    },
    getSingleEntry: async (entryId: number): Promise<Entry | undefined> => {
        const entryResult = await db.select().from(entriesTable).where(eq(entriesTable.entryId, entryId));
        const match = entryResult[0];
        if (match === undefined) {
            return match;
        }
        return {
            entryId: match.entryId,
            title: match.title ?? undefined,
            content: match.content,
            dateCreated: match.dateCreated,
            dateModified: match.dateModified,
        } satisfies Entry;
    },
    deleteEntry: async (entryId: number) => {
        await db.delete(entriesTable).where(eq(entriesTable.entryId, entryId));
    }
}