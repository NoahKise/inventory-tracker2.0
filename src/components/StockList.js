import React from "react";
import StockItem from "./StockItem";
import PropTypes from 'prop-types';

function StockList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.itemsInStock.map((item, index) =>
        <StockItem
          pic2={item.pic2}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          releaseDate={item.releaseDate}
          description={item.description}
          leftInStock={item.leftInStock}
          handleSell={() => props.handleSell(item.id)}
          id={item.id}
          update={props.handleUpdate}
          key={index} />
      )}
    </React.Fragment>
  );
}

StockList.propTypes = {
  Stocklist: PropTypes.array
};

export default StockList;