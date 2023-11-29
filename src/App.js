import './App.css';

import AddNoteForm from './components/AddNoteForm.js';
import NotesList from './components/NotesList.js';

const App = () => {
  return(
    <div>
      <NotesList />
      <AddNoteForm />
    </div>
  )
}

export default App;
