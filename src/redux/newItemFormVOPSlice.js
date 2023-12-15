import { createSlice } from "@reduxjs/toolkit";

const newItemFormVOPSlice = createSlice({
    name: "newItemFormVOP",
    initialState: false,
    reducers: {
        setNewItemFormVOPTrue: (state, action) => {
            return true;
        },
        setNewItemFormVOPFalse: (state, action) => {
            return false;
        }
    }
});

export default newItemFormVOPSlice.reducer;
export const { setNewItemFormVOPTrue, setNewItemFormVOPFalse } = newItemFormVOPSlice.actions;
export const newItemFormVOPSelector = (state) => state.newItemFormVOP;