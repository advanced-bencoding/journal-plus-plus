export enum ErrorCode {
    J001 = "J001",
}

export interface ValidationResult {
    isValid: boolean;
    errorCode?: ErrorCode;
    message?: string;
}