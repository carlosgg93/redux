export const noteReducer = (notes = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':{
      return [...notes, action.data];
    }
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id
      const noteToChange = notes.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return notes.map((note) => {
        return note.id !== id ? note : changedNote
      })
    }
    default:
      break;
  }
  
  return notes
}

const generateId = () =>{
  Number((Math.random() * 1000000).toFixed(0))
}
  
export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }
}
  
export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}