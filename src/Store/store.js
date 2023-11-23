
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "../Reducers/reducers.js";

const state = {
  notes : [{
    content: 'redux is easy',
    important: true,
    id: 1
  },
  {
    content: 'the store is a globalized state',
    important: false,
    id: 2
  }],
}

const store = configureStore(
  { reducer: noteReducer }
);

store.subscribe(() => {
    console.log(store.getState())
})

export default store;