import React from "react";
import PropTypes from "prop-types";

function StockItem({ name, price, releaseDate, imgSrc, pic2,leftInStock, description, update, id, handleSell }) {

  const handleUpdateClick = () => {
    update(id);
  };

  const stockStyle = {
    color: leftInStock < 11 ? 'red' : 'inherit',
  };

  return (
    <div id="stockItem">
      <img src={imgSrc} alt={name} />
      <img src={pic2} alt={name} />
      <p><strong>{name} - {price}</strong></p>
      <p style={stockStyle}>Left in Stock: {leftInStock} {leftInStock < 11 && <span>**LOW STOCK ALERT**</span>}</p>
      <p><em>Release Date: {releaseDate}</em></p>
      <p className="description">{description}</p>
      <button onClick={handleSell}>Sell One Unit</button>
      <button onClick={handleUpdateClick}>View/Edit Item Details</button>
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
  pic2: PropTypes.string,
  leftInStock: PropTypes.number.isRequired,
  handleSell: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default StockItem;