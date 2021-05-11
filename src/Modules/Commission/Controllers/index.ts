const fs = require('fs')
const util = require('util')

import {encoding} from '../../../Common/const'
import {ITransaction} from '../models'

/**
 * Read file thought encoding
 * @param inputFileName name of current file in current directory
 */
const getStuff = (inputFileName: string) => {
    const readFile = util.promisify(fs.readFile)

    return readFile(inputFileName, encoding)
}

/**
 * Parse input file to array of current type
 * @param jsonData input json string
 */
const getListFromJson = (jsonData: string): ITransaction[] => {
    const regex = /\,(?=\s*?[\}\]])/g
    const correct = jsonData.replace(regex, '')

    return JSON.parse(correct)
}

export const setRun = (inputFile?: string) => {
    if (!inputFile) {
        console.log('No input file')
        return
    }

    getStuff(inputFile).then((data) => {
        console.log(getListFromJson(data))
    })
}
