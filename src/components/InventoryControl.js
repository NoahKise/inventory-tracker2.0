import React from "react";
import StockList from "./StockList";
import { v4 } from 'uuid';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      mainInventoryList: [
        {
          name: 'The Lost Caverns of Ixilan',
          price: '$6',
          leftInStock: '30',
          imgSrc: "img/ixilan.webp",
          id: v4()
        },
        {
          name: 'Wilds of Eldraine',
          price: '$5',
          leftInStock: '30',
          imgSrc: "img/wilds-of-eldraine.webp",
          id: v4()
        },
        {
          name: 'Commander Masters',
          price: '$16',
          leftInStock: '24',
          imgSrc: "img/commander-masters.webp",
          id: v4()
        }
      ],
      cartItems: []
    };
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = "New Stock Item";
    currentlyVisibleState = (
      <>
        <StockList
          addToCart={this.addToCart}
          handleUpdate={this.handleUpdateClick}
          itemsInStock={this.state.mainInventoryList}
        />
        <div>
          <button>{buttonText}</button>
        </div>
      </>)

    return (
      <React.Fragment>
        {currentlyVisibleState}

      </React.Fragment >
    );
  }

}

export default InventoryControl;