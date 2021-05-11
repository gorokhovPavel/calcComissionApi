import {setRun} from './src/Modules/Commission/Controllers'

const inputFileName = process.argv[2]

/**
 * Use function from Comission module
 */
setRun(inputFileName)
