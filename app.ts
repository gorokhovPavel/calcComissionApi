const fs = require('fs');
const util = require('util');

const encoding = 'utf8';
const inputFileName = process.argv[2];
const readFile = util.promisify(fs.readFile);

function getStuff() {
  return readFile(inputFileName, encoding);
}

const getListFromJson = (json_data: string) => {
  let regex = /\,(?=\s*?[\}\]])/g;
  let correct = json_data.replace(regex, '');
  const schedule = JSON.parse(correct);

  return schedule[0];
};

getStuff().then(data => {
  console.log(getListFromJson(data));
});
