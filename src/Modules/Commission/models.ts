export interface ITransaction {
    date: string
    user_id: number
    user_type: string
    type: string
    operation: ICurrOperation
}

export interface ICurrOperation {
    amount: number
    currency: string
}
