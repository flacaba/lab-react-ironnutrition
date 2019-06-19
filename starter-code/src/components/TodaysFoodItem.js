import React from 'react'

const TodaysFoodItem = ({name,quantity,calories,id ,onDelete}) => {
  console.log(onDelete)

  return(
    <li className=''>
    {`${quantity} ${name} = ${quantity*calories}`}
      <button className="btn btn-link text-danger" onClick={() => onDelete(id)}><i className="fa fa-times"></i> </button>
    </li>
  )
}

export default TodaysFoodItem