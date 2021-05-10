const commission = require('./src/Modules/Commission/index')

const inputFileName = process.argv[2]

commission.setRun(inputFileName)
