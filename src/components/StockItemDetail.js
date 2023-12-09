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
      leftInStock: e.target.leftInStock.value,
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
        <input
          type='text'
          name='name'
          placeholder={selectedDetails.name} />
          <br></br>
        <input
          type='text'
          name='price'
          placeholder={selectedDetails.price} />
          <br></br>
        <input
          type='text'
          name="leftInStock"
          placeholder={selectedDetails.leftInStock} />
          <br></br>
        <input
          type='text'
          name='imgSrc'
          placeholder={selectedDetails.imgSrc} />
          <br></br>
        <input
          type='text'
          name='releaseDate'
          placeholder={selectedDetails.releaseDate} />
          <br></br>
        <textarea
          name='description'
          placeholder={selectedDetails.description} />
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