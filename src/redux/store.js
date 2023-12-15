import { configureStore } from "@reduxjs/toolkit";
import newItemFormVOPSliceReducer from "./newItemFormVOPSlice";
import itemDetailVOPSliceReducer from "./itemDetailVOPSlice";
import selectedIdSliceReducer from "./selectedIdSlice";
import mainInventoryListSliceReducer from "./mainInventoryListSlice";

export const store = configureStore({
  reducer: {
    newItemFormVOP: newItemFormVOPSliceReducer,
    itemDetailVOP: itemDetailVOPSliceReducer,
    selectedId: selectedIdSliceReducer,
    mainInventoryList: mainInventoryListSliceReducer,
  }
});