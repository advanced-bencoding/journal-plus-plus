import { Entry } from "@/domain/models/entry";
import { ValidationResult } from "@/shared/types";

const addEntry = (entry: Entry) => {
    const validationErrors: string[] = [];
}

// const validateDateString = (dateString: string): ValidationResult => {
//     const date = new Date(dateString);
//     if (date.toString() === "Invalid Date") {
//         return {
//             isValid: false,
//             errorCode: validateDateString
//         }
//         validationErrors.push(`The given date string ${dateString} is invalid.`);
//     }
// }