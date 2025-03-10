import { EntryRepository } from "@/data/repositories/entryRepository";

export const deleteEntry = async (entryId: number) => {
  return await EntryRepository.deleteEntry(entryId);
};
