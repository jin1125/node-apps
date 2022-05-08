const fs = require('fs')

const read = () => {
  fs.readFile('./sample.txt','utf8' , (err, data) => {
      console.log(data);
  })
}

const write = () => {
  fs.writeFile('sample.txt', 'hello', () => {
    console.log('write!');
  })
}

module.exports = {
  read: read,
  write: write,
}