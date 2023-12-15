import itemDetailVOPSliceReducer, { setItemDetailVOPTrue, setItemDetailVOPFalse } from './../../redux/itemDetailVOPSlice';

describe('itemDetailVOPSliceReducer', () => {
    it('should handle setItemDetailVOPTrue action', () => {
        const newState = itemDetailVOPSliceReducer(false, setItemDetailVOPTrue());
        expect (newState).toEqual(true);
    });
    it('should handle setItemDetailVOPFalse action', () => {
        const newState = itemDetailVOPSliceReducer(true, setItemDetailVOPFalse());
        expect (newState).toEqual(false);
    });
});