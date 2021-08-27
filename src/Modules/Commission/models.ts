/**
 * About date and user that 've done current transaction
 */
export interface ITransaction {
    date: string
    user_id: number
    user_type: EUserType
    type: EOperationType
    operation: ICurrOperation
}

/**
 * About amount/currency
 */
export interface ICurrOperation {
    amount: number
    currency?: ECurrency
}

/**
 * Types of user
 * @param NATURAL natural person
 * @param JURIDICAL legal person
 */
export enum EUserType {
    NATURAL = 'natural',
    JURIDICAL = 'juridical',
}

/**
 * Types of operations
 * @param CASH_IN
 * @param CASH_OUT
 */
export enum EOperationType {
    CASH_IN = 'cash_in',
    CASH_OUT = 'cash_out',
}

/**
 * Types of currency
 * @param EUR
 */
export enum ECurrency {
    EUR = 'EUR',
}
