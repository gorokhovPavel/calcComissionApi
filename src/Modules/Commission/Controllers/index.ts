import {ITransaction} from '../models'
import {getReadFile} from '../../../Common/utils'
import {getCalculatedComission} from './Calculate'

/**
 * Parse input file to array of current type
 * @param jsonData input json string
 */
const getListFromJson = (jsonData: string): ITransaction[] => {
    let reusltParsedFile = []
    const regex = /\,(?=\s*?[\}\]])/g
    const correct = jsonData.replace(regex, '')

    try {
        reusltParsedFile = JSON.parse(correct)
    } catch (exc) {
        console.log('There is error on the trying to parse input json file')
    }

    return reusltParsedFile
}

/**
 * Main function in this module of Comission, is running file and writing result on console
 */
export const setRunCalculating = (inputFile?: string) => {
    if (!inputFile) {
        console.log('No input file')
        return
    }

    getReadFile(inputFile).then((data) => {
        const transactionList = getListFromJson(data)

        getCalculatedComission(transactionList)
    })
}
