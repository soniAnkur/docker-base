const express = require('express')
const app = express()

app.use(express.static(__dirname + '/coming-soon'));

app.get('/', function (req, res) {
res.send('Hello World, from docker ==> which is running express')
})

app.listen(3000, function () {
console.log('Node is up and running onn docker container cheers 🍺🍺!! 🛥⚓️')
})