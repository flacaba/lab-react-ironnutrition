import React from 'react'
import FoodItem from './FoodItem';

const FoodList = ({ foodList, addFoodData }) => {

  return (  
    <div className='w-50'>
      {foodList.map((e,i) => <FoodItem {...e} addFoodData = { addFoodData }key={i}/>)}
    </div>
  )
}

export default FoodList