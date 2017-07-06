const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const express = require('express')
const app = express()

let noteCount = 1
const notes = []

app.use(jsonParser)

app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10)
  if (req.body.content) {
    notes[noteId - 1].content = req.body.content
  }
  if (req.body.title) {
    notes[noteId - 1].title = req.body.title
  }
  req.body.content || req.body.title ? res.sendStatus(200) : res.sendStatus(404)
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
