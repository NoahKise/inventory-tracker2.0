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
  return (
    <React.Fragment>
      <h2>Currently Viewing / Editing <em>"{selectedDetails.name}"</em></h2>
      <form onSubmit={handleStockItemDetailSubmission}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={selectedDetails.name} />
        <br></br>
        <label>Price: </label>
        <input
          type='text'
          name='price'
          value={selectedDetails.price} />
        <br></br>
        <label>Left in Stock: </label>
        <input
          type='number'
          name="leftInStock"
          value={selectedDetails.leftInStock} />
        <br></br>
        <label>Image Source: </label>
        <input
          type='text'
          name='imgSrc'
          value={selectedDetails.imgSrc} />
        <br></br>
        <label>Release Date: </label>
        <input
          type='text'
          name='releaseDate'
          value={selectedDetails.releaseDate} />
        <br></br>
        <label>Description:</label>
        <br></br>
        <textarea
          rows="4" cols="50"
          name='description'
          value={selectedDetails.description} />
        <br></br>
        <button type='submit'>Save Changes</button>
      </form>
    </React.Fragment>
  );
}

StockItemDetail.propTypes = {
  selectedItemId: PropTypes.string,
  selectedDetails: PropTypes.object,
  onItemEdit: PropTypes.func
};

export default StockItemDetail;