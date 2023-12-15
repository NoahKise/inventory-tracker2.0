import { createSlice } from "@reduxjs/toolkit";

const mainInventoryListSlice = createSlice({
    name: "mainInventoryList",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        },
    }

});

export default mainInventoryListSlice.reducer;
export const { addItem } = mainInventoryListSlice.actions;
export const mainInventoryListSelector = (state) => state.mainInventoryList;