import { createSlice } from "@reduxjs/toolkit";

const selectedIdSlice = createSlice({
    name: "selectedId",
    initialState: null,
    reducers: {
        currentId: (state, action) => {
            return (action.payload)
        },
    }

});

export default selectedIdSlice.reducer;
export const { currentScore } = selectedIdSlice.actions;
export const selectedIdSelector = (state) => state.selectedId;