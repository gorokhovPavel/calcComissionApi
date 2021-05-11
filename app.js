const commission = require('./src/Modules/Commission/Controllers')

const inputFileName = process.argv[2]

commission.setRun(inputFileName)
