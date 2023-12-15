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
import { addItem } from "../redux/mainInventoryListSlice";

const InventoryControl = () => {

  const dispatch = useDispatch();
  const newItemFormVOP = useSelector(newItemFormVOPSelector);
  const itemDetailVOP = useSelector(itemDetailVOPSelector);
  const selectedId = useSelector(selectedIdSelector);
  const mainInventoryList = useSelector(mainInventoryListSelector);

  const handleNewItemClick = () => {
    dispatch(setNewItemFormVOPTrue());  //this.setState(prevState => ({ newItemFormVOP: !prevState.newItemFormVOP }));
  }

  const handleAddingNewStockItemToInventory = (newInventory) => {
    dispatch(addItem(newInventory))  //const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    dispatch(setNewItemFormVOPFalse());
    // this.setState({
    //   mainInventoryList: newMainInventoryList,
    //   newItemFormVOP: false
    // });
  };

  const handleEditingItem = (updatedInventory) => {
    const updatedList = this.state.mainInventoryList.map(item => {
      if (item.id === this.state.selectedId) {
        return {
          ...item,
          name: updatedInventory.name,
          price: updatedInventory.price,
          leftInStock: updatedInventory.leftInStock,
          releaseDate: updatedInventory.releaseDate,
          description: updatedInventory.description,
          imgSrc: updatedInventory.imgSrc
        };
      }
      return item;
    });

    this.setState({
      mainInventoryList: updatedList,
      itemDetailVOP: false
    });
  };

  const handleUpdateClick = (id) => {
    dispatch(setitemDetailVOPTrue());
    dispatch(currentId(id));
    // this.setState(prevState => ({
    //   itemDetailVOP: !prevState.itemDetailVOP,
    //   selectedId: id
    // }));
  };

  const handleSellClick = (id) => {
    const updatedList = this.state.mainInventoryList.map(item => {
      if (item.id === id && item.leftInStock > 0) {
        return {
          ...item,
          leftInStock: item.leftInStock - 1
        };
      }
      return item;
    });

    this.setState({
      mainInventoryList: updatedList
    });
  };

  const handleReturnToInventoryClick = () => {
    if (newItemFormVOP) {
      dispatch(setNewItemFormVOPFalse());  //this.setState(prevState => ({ newItemFormVOP: !prevState.newItemFormVOP }));
    } else dispatch(setitemDetailVOPFalse());  //this.setState(prevState => ({ itemDetailVOP: !prevState.itemDetailVOP }));
  }

  const handleDeleteItem = (itemId) => {
    const updatedInventoryList = this.state.mainInventoryList.filter(item => item.id !== itemId);
    this.setState({
      mainInventoryList: updatedInventoryList,
      itemDetailVOP: false,
    });
  };

    let currentlyVisibleState = null;

    if (this.state.newItemFormVOP) {
      currentlyVisibleState = (
        <>
          <NewStockItemForm onNewInventoryCreation={this.handleAddingNewStockItemToInventory} />
          <div className="bottom-button">
            <button onClick={this.handleReturnToInventoryClick}>Return to Inventory</button>
          </div>
        </>)
    } else if (this.state.itemDetailVOP) {
      const selectedItem = this.state.mainInventoryList.find(
        (item) => item.id === this.state.selectedId
      );
      currentlyVisibleState = (
        <>
          <StockItemDetail
            onItemEdit={this.handleEditingItem}
            onDelete={this.handleDeleteItem}
            selectedItemId={this.state.selectedId}
            selectedDetails={selectedItem}
          />
          <div className="bottom-button">
            <button onClick={this.handleReturnToInventoryClick}>Return to Inventory</button>
          </div>
        </>)
    } else currentlyVisibleState = (
      <>
        <StockList
          addToCart={this.addToCart}
          handleUpdate={this.handleUpdateClick}
          itemsInStock={this.state.mainInventoryList}
          handleSell={this.handleSellClick}
        />
        <div className="bottom-button">
          <button onClick={this.handleNewItemClick}>New Stock Item</button>
        </div>
      </>)
    return (
      <React.Fragment>
        {currentlyVisibleState}

      </React.Fragment >
    );
}

export default InventoryControl;