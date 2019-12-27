import React from 'react';
import FoodItems from './FoodList/FoodItems';
import Navbar from '../Utils/Navbar';

const Home = ({ addCardHandler, data, addOne, minusOne }) => {
  return (
    <div>
      
      <h1>Indian Foodssss</h1>
      <div>
        <FoodItems addCardHandler={addCardHandler} data={data} addOne={addOne} minusOne={minusOne}/>
      </div>
    </div>
  );
};

export default Home;
