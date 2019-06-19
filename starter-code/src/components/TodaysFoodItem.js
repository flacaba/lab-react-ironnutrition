import React from 'react'

const TodaysFoodItem = ({name,quantity,calories,id ,onDelete}) => {
  console.log(onDelete)

  return(
    <li className='mt-3'>
    {`${quantity} ${name} = ${quantity*calories}`}
      <button className='btn-sm btn-danger ml-3 pt-0 pb-0' onClick={() => onDelete(id)}> - </button>
    </li>
  )
}

export default TodaysFoodItem