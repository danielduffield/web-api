const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const putValidator = require('./putValidator')
const express = require('express')
const app = express()

let noteCount = 1
const notes = []

app.use(jsonParser)

app.put('/notes/:id', putValidator)

app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10)
  const note = notes.find(note => note.id === noteId)
  if (!req.body) return res.sendStatus(404)
  Object.assign(note, req.body)
  res.sendStatus(200)
})

app.get('/notes/', (req, res) => {
  res.send(notes)
})

app.get('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10)
  const selectedNote = notes.find(note => note.id === noteId)
  selectedNote ? res.send(selectedNote) : res.sendStatus(404)
})

app.post('/notes/', (req, res) => {
  req.body.id = noteCount
  noteCount++
  notes.push(req.body)
  res.sendStatus(201)
})

app.listen(3000, () => console.log('Listening on 3000.'))
