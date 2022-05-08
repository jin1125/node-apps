const fs = require('fs')

const person = {
  name: 'Mike',
  age: 30
}

const read = () => {
  fs.readFile('./sample.json','utf8' , (err, data) => {
    const person = JSON.parse(data)
    console.log(person.age);
  })
}

const write = () => {
  fs.writeFile('sample.json', JSON.stringify(person), () => {
    console.log('write!');
  })
}

module.exports = {
  read: read,
  write: write,
}