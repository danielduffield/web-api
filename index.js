const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const express = require('express')
const app = express()

const notes = []

app.use(jsonParser)

app.post('/notes/', (req, res) => {
  notes.push(req.body)
  notes.forEach((note, index) => {
    note.id = index
  })
  res.sendStatus(201)
})

app.listen(3000, () => console.log('Listening on 3000.'))
