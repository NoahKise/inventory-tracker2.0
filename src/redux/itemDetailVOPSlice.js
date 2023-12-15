import { createSlice } from "@reduxjs/toolkit";

const itemDetailVOPSlice = createSlice({
    name: "itemDetailVOP",
    initialState: false,
    reducers: {
        setItemDetailVOPTrue: (state, action) => {
            return true;
        },
        setItemDetailVOPFalse: (state, action) => {
            return false;
        }
    }
});

export default itemDetailVOPSlice.reducer;
export const { setItemDetailVOPTrue, setItemDetailVOPFalse } = itemDetailVOPSlice.actions;
export const itemDetailVOPSelector = (state) => state.itemDetailVOP;