import { EntryRepository } from "@/data/repositories/entryRepository";
import { Entry } from "@/domain/models/entry";

export const getAllEntries = async (): Promise<Entry[]> => {
    return await EntryRepository.getAllEntries();
}

export const getSingleEntry = async (entryId: number): Promise<Entry | undefined> => {
    return await EntryRepository.getSingleEntry(entryId);
}