import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {toggleImportanceOf} from '../Reducers/noteReducer.js'

const NotesList = () => {
  
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <ul>
      {notes && notes.map(note =>
        <li key={note.id} onClick={() => toggleImportance(note.id)} >
          {note.content} <strong>{note.important ? 'important' : 'not important'}</strong>
        </li>
      )}
    </ul>
  );
}

export default NotesList;