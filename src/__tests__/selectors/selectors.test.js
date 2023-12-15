import { itemDetailVOPSelector } from "../../redux/itemDetailVOPSlice";
import { mainInventoryListSelector } from "../../redux/mainInventoryListSlice";
import { newItemFormVOPSelector } from "../../redux/newItemFormVOPSlice";
import { selectedIdSelector } from "../../redux/selectedIdSlice";

describe('Selector Tests', () => {
  const state = {
    itemDetailVOP: false,
    newItemFormVOP: true,
    mainInventoryList: [],
    selectedId: 1
  };
  it('should show state is selected correctly for itemDetailVOPSelector', () => {
    const test = itemDetailVOPSelector(state);
    expect(test).toEqual(false);
  });

  it('should show state is selected correctly for mainInventoryListSelector', () => {
    const test = mainInventoryListSelector(state);
    expect(test).toEqual([]);
  });

  it('should show state is selected correctly for newItemFormVOPSelector', () => {
    const test = newItemFormVOPSelector(state);
    expect(test).toEqual(true);
  });

  it('should show state is selected correctly for selectedIdSelector', () => {
    const test = selectedIdSelector(state);
    expect(test).toEqual(1);
  });
});