const fs = require('fs')
const util = require('util')
const {encoding} = require('../../Common/const')

const readFile = util.promisify(fs.readFile)

const getStuff = (inputFileName: string) => {
    return readFile(inputFileName, encoding)
}

const getListFromJson = (json_data: string) => {
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
