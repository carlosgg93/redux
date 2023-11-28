import { useDispatch, useSelector } from "react-redux"
import { newNote } from "../Reducers/noteReducer.js"

const AddNoteForm = () => {

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

  return (
    <form onSubmit={addNote}>
      <input name="note" /> 
      <button type="submit">add</button>
    </form>
  );
}

export default AddNoteForm;