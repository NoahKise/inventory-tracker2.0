import { createSlice } from "@reduxjs/toolkit";

const itemDetailVOPSlice = createSlice({
    name: "itemDetailVOP",
    initialState: false,
    reducers: {
        setitemDetailVOPTrue: (state, action) => {
            return true;
        },
        setitemDetailVOPFalse: (state, action) => {
            return false;
        }
    }
});

export default itemDetailVOPSlice.reducer;
export const { setitemDetailVOPTrue, setitemDetailVOPFalse } = itemDetailVOPSlice.actions;
export const itemDetailVOPSelector = (state) => state.itemDetailVOP;