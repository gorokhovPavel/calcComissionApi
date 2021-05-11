const fs = require('fs')
const util = require('util')
import {encoding} from '../../../Common/const'
import {ITransaction} from '../models'

const readFile = util.promisify(fs.readFile)

const getStuff = (inputFileName: string) => {
    return readFile(inputFileName, encoding)
}

const getListFromJson = (json_data: string): ITransaction[] => {
    const regex = /\,(?=\s*?[\}\]])/g
    const correct = json_data.replace(regex, '')

    return JSON.parse(correct)
}

module.exports = {
    setRun: (inputFile: string) => {
        getStuff(inputFile).then((data) => {
            console.log(getListFromJson(data))
        })
    },
}
