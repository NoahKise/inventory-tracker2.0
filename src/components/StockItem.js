import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItem({ name, price, releaseDate, imgSrc, leftInStock, description, update, id, addToCart }) {
  const [stockRemaining, setStockRemaining] = useState(leftInStock);

  const handleSellClick = () => {
    if (stockRemaining > 0) {
      setStockRemaining(s => s - 1);
      // addToCart(name, price, id);
    } else {
    }
  };

  const handleUpdateClick = () => {
    update(id);
  };

  return (
    <div id="stockItem">
      <img src={imgSrc} alt={name} />
      <p>{name} - {price}</p>
      <p>Left in Stock: {stockRemaining}</p>
      <p>Release Date: {releaseDate}</p>
      <p>{description}</p>
      <button onClick={handleSellClick}>Sell a Pack</button>
      <button onClick={handleUpdateClick}>Edit Item</button>
      <hr />
    </div>
  );
}

StockItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default StockItem;