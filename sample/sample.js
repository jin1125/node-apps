const { read, write } = require('./helper')

console.log('start');

const request = process.argv[2]

if (request === 'read') {
  read()
} else if (request === 'write') {
  write()
} else {
  console.error('err!');
}

console.log('end');