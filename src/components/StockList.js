import React from "react";
import StockItem from "./StockItem";
import PropTypes from 'prop-types';

function StockList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.itemsInStock.map((item, index) =>
        <StockItem 
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          releaseDate={item.releaseDate}
          description={item.description}
          leftInStock={item.leftInStock}
          id={item.id}
          update={props.handleUpdate}
          addToCart={props.addToCart}
          key={index}/>
      )}
    </React.Fragment>
  );
}

StockList.propTypes = {
  Stocklist: PropTypes.array
};

export default StockList;