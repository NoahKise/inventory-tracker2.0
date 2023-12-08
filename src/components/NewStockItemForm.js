import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewStockItemForm(props) {
  function handleNewStockItemFormSubmission(e) {
    e.preventDefault();
    props.onNewInventoryCreation({ 
      name: e.target.name.value,
      price: e.target.price.value,
      leftInStock: e.target.leftInStock.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewStockItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='New Item Name' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name="leftInStock"
          placeholder='Starting Inventory' />
        <button type='submit'>Add to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewStockItemForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewStockItemForm;