import React from "react";
import StockList from "./StockList";
import NewStockItemForm from "./NewStockItemForm";
import StockItemDetail from "./StockItemDetail";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { newItemFormVOPSelector } from "../redux/newItemFormVOPSlice";
import { itemDetailVOPSelector } from "../redux/itemDetailVOPSlice";
import { selectedIdSelector } from "../redux/selectedIdSlice";
import { mainInventoryListSelector } from "../redux/mainInventoryListSlice";

import { setNewItemFormVOPTrue, setNewItemFormVOPFalse } from "../redux/newItemFormVOPSlice";
import { setitemDetailVOPTrue, setitemDetailVOPFalse } from "../redux/itemDetailVOPSlice";
import { currentId } from "../redux/selectedIdSlice";
import { addItem, sellItem, deleteItem, editItem } from "../redux/mainInventoryListSlice";

const InventoryControl = () => {

  const dispatch = useDispatch();
  const newItemFormVOP = useSelector(newItemFormVOPSelector);
  const itemDetailVOP = useSelector(itemDetailVOPSelector);
  const selectedId = useSelector(selectedIdSelector);
  const mainInventoryList = useSelector(mainInventoryListSelector);

  const handleNewItemClick = () => {
    dispatch(setNewItemFormVOPTrue());
  }

  const handleAddingNewStockItemToInventory = (newInventory) => {
    dispatch(addItem(newInventory));
    dispatch(setNewItemFormVOPFalse());
  };

  const handleEditingItem = (updatedInventory) => {
    dispatch(editItem(updatedInventory));
    dispatch(setitemDetailVOPFalse());
  };

  const handleUpdateClick = (id) => {
    dispatch(setitemDetailVOPTrue());
    dispatch(currentId(id));
  };

  const handleSellClick = (id) => {
    dispatch(sellItem({ itemId: id}));
  };

  const handleReturnToInventoryClick = () => {
    if (newItemFormVOP) {
      dispatch(setNewItemFormVOPFalse());
    } else dispatch(setitemDetailVOPFalse());
  }

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
    dispatch(setitemDetailVOPFalse())
  };

  let currentlyVisibleState = null;

  if (newItemFormVOP) {
    currentlyVisibleState = (
      <>
        <NewStockItemForm onNewInventoryCreation={handleAddingNewStockItemToInventory} />
        <div className="bottom-button">
          <button onClick={handleReturnToInventoryClick}>Return to Inventory</button>
        </div>
      </>)
  } else if (itemDetailVOP) {
    const selectedItem = mainInventoryList.find(
      (item) => item.id === selectedId
    );
    currentlyVisibleState = (
      <>
        <StockItemDetail
          onItemEdit={handleEditingItem}
          onDelete={handleDeleteItem}
          selectedItemId={selectedId}
          selectedDetails={selectedItem}
        />
        <div className="bottom-button">
          <button onClick={handleReturnToInventoryClick}>Return to Inventory</button>
        </div>
      </>)
  } else currentlyVisibleState = (
    <>
      <StockList
        handleUpdate={handleUpdateClick}
        itemsInStock={mainInventoryList}
        handleSell={handleSellClick}
      />
      <div className="bottom-button">
        <button onClick={handleNewItemClick}>New Stock Item</button>
      </div>
    </>)
  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment >
  );
}

export default InventoryControl;