const fs = require('fs')
const util = require('util')

import {encoding} from './const'

/**
 * Mode of reading file encoding
 * @param inputFileName name of current files in current directory
 */
export const getReadFile = (inputFileName: string) => {
    const readFile = util.promisify(fs.readFile)

    return readFile(inputFileName, encoding)
}
