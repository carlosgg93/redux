
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/rootReducer.js";

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

const store = configureStore({ 
  reducer: rootReducer, 
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: state,
  enhancers: [],
});

// store.subscribe(() => {
//     console.log(store.getState())
// })


export default store;