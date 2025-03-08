import { EntriesClient } from "@/data/sources/drizzleClient/entriesClient"
import { Entry } from "@/domain/models/entry";

export const getAllEntries = async (): Promise<Entry[]> => {
    return await EntriesClient.getAllEntries();
}

export const getSingleEntry = async (entryId: number): Promise<Entry | undefined> => {
    return await EntriesClient.getSingleEntry(entryId);
}