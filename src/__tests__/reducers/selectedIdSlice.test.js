import selectedIdSliceReducer, { currentId } from "../../redux/selectedIdSlice";

describe ('selectedIdSliceReducer', () => {
  it('should handle currentId action', () => {
    const newState = selectedIdSliceReducer(null, currentId('1234'));
    expect (newState).toEqual('1234')
  })
});