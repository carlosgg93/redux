import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: 'ALL',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (filter, action) => {
          return action.payload
        },
    },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;