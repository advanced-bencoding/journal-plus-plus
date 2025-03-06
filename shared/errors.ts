import { ErrorCode } from "./types";

const errorMessages: Record<ErrorCode, (params: string[]) => string> = {
    J001: (params: string[]) => `Invalid date string given for '${params[0]}'.`
}