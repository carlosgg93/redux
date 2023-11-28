import { combineReducers } from 'redux'

import noteReducer from './noteReducer.js'
import filterReducer from './filterReducer.js'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  notes: noteReducer,
  filter: filterReducer
})

export default rootReducer