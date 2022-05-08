const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log(req);
  res.send('<h1>Top Page!</h1>')
})

app.get('/api/v1/users', function (req, res) {
  res.send({
    name: 'Mike',
    age: 30,
  })
})

app.listen(3000, () => console.log('running'))