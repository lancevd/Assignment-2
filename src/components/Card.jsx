import React from 'react'

const Card = (props) => {
  return (
    <div className='user-card'>
      <img src={props.picture} alt="" />
      <div className="card-details p-2">
        <h4>{props.name}</h4>
        <p>{props.gender} | {props.age} years </p>
        <p>{props.city}, {props.state} ({props.country})</p>
        <button className="card-btn">View Profile</button>
      </div>
      
    </div>
  )
}

export default Card