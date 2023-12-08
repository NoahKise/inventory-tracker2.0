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
      imgSrc: e.target.imgSrc.value,
      releaseDate: e.target.releaseDate.value,
      description: e.target.description.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <h2>Add New Item to Inventory</h2>
      <form onSubmit={handleNewStockItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
          <br></br>
        <input
          type='text'
          name='price'
          placeholder='Price' />
          <br></br>
        <input
          type='text'
          name="leftInStock"
          placeholder='Starting Inventory Amount' />
          <br></br>
        <input
          type='text'
          name='imgSrc'
          placeholder='Image Link' />
          <br></br>
        <input
          type='text'
          name='releaseDate'
          placeholder='Release Date' />
          <br></br>
        <textarea
          name='description'
          placeholder='Product Description' />
          <br></br>
        <button type='submit'>Add to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewStockItemForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewStockItemForm;