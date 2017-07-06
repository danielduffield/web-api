const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const express = require('express')
const app = express()

app.use(jsonParser)

app.listen(3000, () => console.log('Listening on 3000.'))
