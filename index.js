const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const express = require('express')
const app = express()

let nextNoteId = 1
const notes = []

app.use(jsonParser)

app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10)
  const note = notes.find(note => note.id === noteId)
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
  req.body.id = nextNoteId
  nextNoteId++
  notes.push(req.body)
  res.sendStatus(201)
})

app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10)
  const noteIndex = notes.findIndex(note => note.id === noteId)
  if (noteIndex === -1) return res.sendStatus(404)
  notes.splice(noteIndex, 1)
  res.sendStatus(204)
})

app.listen(3000, () => console.log('Listening on 3000.'))
