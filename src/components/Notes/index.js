import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {MainContainer, Heading} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])
  const handleTitle = event => {
    setTitle(event.target.value)
  }
  const handleTextArea = event => {
    setNote(event.target.value)
  }
  const handleAdd = () => {
    const newObj = {
      id: uuidv4(),
      note,
      title,
    }
    setNotesList(prevState => [...prevState, newObj])
    setTitle('')
    setNote('')
  }
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <form onSubmit={handleAdd}>
        <input
          value={title}
          type="text"
          placeholder="Title"
          onChange={handleTitle}
        />
        <textarea
          value={note}
          cols="50"
          rows="5"
          placeholder="Take a Note..."
          onChange={handleTextArea}
        />
        <button type="submit">Add</button>
      </form>
      {notesList.length === 0 ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h1>No Notes Yet</h1>
          <p>Notes you add will appear here</p>
        </div>
      ) : (
        <ul>
          {notesList.map(each => (
            <NoteItem key={each.id} notesDetails={each} />
          ))}
        </ul>
      )}
    </MainContainer>
  )
}
export default Notes
