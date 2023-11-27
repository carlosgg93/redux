import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import {newNote, toggleImportanceOf} from './Reducers/noteReducer.js'

const App = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  const addNote = (event) => {
    event.preventDefault()
    
    const note ={
      content: event.target.note.value,
      important: Math.random() > 0.5,
      id: notes.length + 1
    }

    dispatch(newNote(note))
  }

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }
  
  return(
    <div>
      <form onSubmit={addNote}>
        <input name="note" /> 
        <button type="submit">add</button>
      </form>
      <ul>
        {notes && notes.map(note =>
          <li
            key={note.id} 
            onClick={() => toggleImportance(note.id)}
          >
            {note.content} <strong>{note.important ? 'important' : 'not important'}</strong>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App;
