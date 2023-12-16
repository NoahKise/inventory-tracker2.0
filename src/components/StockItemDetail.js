import React from 'react';
import PropTypes from 'prop-types';

function StockItemDetail(props) {
  const { selectedDetails } = props;
  const itemId = props.selectedItemId;
  function handleStockItemDetailSubmission(e) {
    e.preventDefault();
    props.onItemEdit({
      name: e.target.name.value,
      price: e.target.price.value,
      leftInStock: parseInt(e.target.leftInStock.value),
      imgSrc: e.target.imgSrc.value,
      pic2: e.target.pic2.value,
      releaseDate: e.target.releaseDate.value,
      description: e.target.description.value,
      id: itemId
    });
  }

  function handleDeleteItem() {
    props.onDelete(itemId);
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
          <label>Image 1 Source: </label>
          <input
            type='text'
            name='imgSrc'
            defaultValue={selectedDetails.imgSrc} />
          <br></br>
          <label>Image 2 Source: </label>
          <input
            type='text'
            name='pic2'
            defaultValue={selectedDetails.pic2} />
          <br></br>
          <label>Release Date: </label>
          <input
            type='text'
            name='releaseDate'
            defaultValue={selectedDetails.releaseDate} />
          <br></br>
          <label>Description:</label>
          <br></br>
          <br></br>
          <textarea
            rows="14" cols="50"
            name='description'
            defaultValue={selectedDetails.description} />
          <br></br>
          <button type='submit'>Save Changes</button>
          <button onClick={handleDeleteItem}>Delete Item</button>
        </form>
        
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