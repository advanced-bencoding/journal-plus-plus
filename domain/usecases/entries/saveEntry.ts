import { EntryRepository } from "@/data/repositories/entryRepository";
import { Entry } from "@/domain/models/entry";

export const addEntry = async (entry: Entry) => {
    // no validations required as there's no hop after UI validations
    // call repo
    const dateModified = new Date().toISOString();
    entry.dateModified = dateModified;
    if (entry.entryId === undefined) {
        entry.dateCreated = dateModified;
    }
    await EntryRepository.saveEntry(entry);
}
