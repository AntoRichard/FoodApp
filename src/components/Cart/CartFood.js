import React from 'react';

const CartFood = ({ title, value, img, price }) => {
  return (
    <div
      style={{
        border: '2px solid #ccc',
        marginBottom: '10px',
        boxShadow: '1px 1px 10px 1px #eee'
      }}
    >
      <img src={img} alt={title} height="100" width="150" />
      <span style={{ display: 'inline', float: 'right', marginRight: '20px' }}>
        <h4>Title: {title}</h4>
        {/* <h4>Quantity: {value}</h4> */}
        <h4>
          {price} x {value} = {value * price}
        </h4>
      </span>
    </div>
  );
};

export default CartFood;
