import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {toggleImportanceOf, initializeNotes} from '../Reducers/noteReducer.js'
import Filters from './Filters.js'
import { getAllNotes } from '../Services/noteService.js';

const NotesList = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    getAllNotes()
    .then(initialNotes => {
      dispatch(initializeNotes(initialNotes))
    })
  }, [dispatch])
  
  const notes = useSelector(state => state.notes)

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <ul>
      <Filters />
      {notes && notes.map(note =>
        <li key={note.id} onClick={() => toggleImportance(note.id)} >
          {note.content} <strong>{note.important ? 'important' : 'not important'}</strong>
        </li>
      )}
    </ul>
  );
}

export default NotesList;