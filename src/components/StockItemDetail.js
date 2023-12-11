import React from 'react';
import PropTypes from 'prop-types';

function StockItemDetail(props) {
  const { selectedItemId, selectedDetails } = props;
  function handleStockItemDetailSubmission(e) {
    e.preventDefault();
    const itemId = e.target.id.value;
    props.onItemEdit({
      name: e.target.name.value,
      price: e.target.price.value,
      leftInStock: parseInt(e.target.leftInStock.value),
      imgSrc: e.target.imgSrc.value,
      releaseDate: e.target.releaseDate.value,
      description: e.target.description.value,
      id: itemId
    });
  }

  function handleDeleteItem() {
    props.onDelete(selectedItemId);
  }

  return (
    <React.Fragment>
      <div className='input-form'>
        <h2>Currently Viewing / Editing <em>"{selectedDetails.name}"</em></h2>
        <form onSubmit={handleStockItemDetailSubmission}>
          <label>Name: </label>
          <input
            type='text'
            name='name'
            defaultValue={selectedDetails.name} />
          <br></br>
          <label>Price: </label>
          <input
            type='text'
            name='price'
            defaultValue={selectedDetails.price} />
          <br></br>
          <label>Left in Stock: </label>
          <input
            type='number'
            name="leftInStock"
            defaultValue={selectedDetails.leftInStock} />
          <br></br>
          <label>Image Source: </label>
          <input
            type='text'
            name='imgSrc'
            defaultValue={selectedDetails.imgSrc} />
          <br></br>
          <label>Release Date: </label>
          <input
            type='text'
            name='releaseDate'
            defaultValue={selectedDetails.releaseDate} />
          <br></br>
          <label>Description:</label>
          <br></br>
          <textarea
            rows="4" cols="50"
            name='description'
            defaultValue={selectedDetails.description} />
          <br></br>
          <button type='submit'>Save Changes</button>
        </form>
        <button onClick={handleDeleteItem}>Delete Item</button>
      </div>
    </React.Fragment>
  );
}

StockItemDetail.propTypes = {
  selectedItemId: PropTypes.string,
  selectedDetails: PropTypes.object,
  onItemEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default StockItemDetail;