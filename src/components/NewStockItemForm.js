import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewStockItemForm(props) {
  function handleNewStockItemFormSubmission(e) {
    e.preventDefault();
    props.onNewInventoryCreation({
      name: e.target.name.value,
      price: e.target.price.value,
      leftInStock: parseInt(e.target.leftInStock.value),
      imgSrc: e.target.imgSrc.value,
      releaseDate: e.target.releaseDate.value,
      description: e.target.description.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <div className='input-form'>
        <h2>Adding New Item to Inventory</h2>
        <form onSubmit={handleNewStockItemFormSubmission}>
          <label>Name: </label>
          <input
            type='text'
            name='name'
            placeholder='Item Name' />
          <br></br>
          <label>Price: </label>
          <input
            type='text'
            name='price'
            placeholder='Price' />
          <br></br>
          <label>Left in Stock: </label>
          <input
            type='number'
            name="leftInStock"
            placeholder='1' />
          <br></br>
          <label>Image Source: </label>
          <input
            type='text'
            name='imgSrc'
            placeholder='Image Link' />
          <br></br>
          <label>Release Date: </label>
          <input
            type='text'
            name='releaseDate'
            placeholder='Release Date' />
          <br></br>
          <label>Description:</label>
          <br></br>
          <br></br>
          <textarea
          rows="14" cols="50"
            name='description'
            placeholder='Product Description' />
          <br></br>
          <button type='submit'>Add to Inventory</button>
        </form>
      </div>
    </React.Fragment>
  );
}

NewStockItemForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewStockItemForm;