import { useDispatch } from "react-redux"
import { newNote } from "../Reducers/noteReducer.js"
import { createNote } from "../Services/noteService.js"

const AddNoteForm = () => {

  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    const note = await createNote(content)
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