import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/rootReducer.js";
import thunk from "redux-thunk";

const state = {
  notes : [],
  filter: 'ALL'
}

const store = configureStore({ 
  reducer: rootReducer, 
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: state,
  middleware: [thunk],
  enhancers: [],
});

export default store;