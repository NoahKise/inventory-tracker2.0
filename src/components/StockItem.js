import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItem({ name, price, releaseDate, imgSrc, leftInStock, description, update, id }) {
  const [stockRemaining, setStockRemaining] = useState(leftInStock);

  const handleSellClick = () => {
    if (stockRemaining > 0) {
      setStockRemaining(s => s - 1);
    } else {
    }
  };

  const handleUpdateClick = () => {
    update(id);
  };

  return (
    <div id="stockItem">
      <img src={imgSrc} alt={name} />
      <p><strong>{name} - {price}</strong></p>
      <p>Left in Stock: {stockRemaining}</p>
      <p><em>Release Date: {releaseDate}</em></p>
      <p>{description}</p>
      <button onClick={handleSellClick}>Sell One Unit</button>
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
  imgSrc: PropTypes.string,
  leftInStock: PropTypes.string.isRequired
};

export default StockItem;