const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const express = require('express')
const app = express()

let noteCount = 1
const notes = []

app.use(jsonParser)

app.get('/notes/', (req, res) => {
  res.send(notes)
})

app.post('/notes/', (req, res) => {
  req.body.id = noteCount
  noteCount++
  notes.push(req.body)
  res.sendStatus(201)
})

app.listen(3000, () => console.log('Listening on 3000.'))
