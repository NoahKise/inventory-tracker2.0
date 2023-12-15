import newItemFormVOPSliceReducer, { setNewItemFormVOPTrue, setNewItemFormVOPFalse } from './../../redux/newItemFormVOPSlice';

describe('newItemFormVOPSliceReducer', () => {
    it('should handle setNewItemFormVOPTrue action', () => {
        const newState = newItemFormVOPSliceReducer(false, setNewItemFormVOPTrue());
        expect(newState).toEqual(true);
    });
    it('should handle setNewItemFormVOPFalse action', () => {
        const newState = newItemFormVOPSliceReducer(true, setNewItemFormVOPFalse());
        expect(newState).toEqual(false);
    });
});