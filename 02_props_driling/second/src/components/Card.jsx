import React from 'react'

const Card = (hello) => {
     console.log(hello); //just for testing purpose 
  return (
      <div className='card'>
        <img src={hello.link}></img>
        <h1>{hello.user}</h1>
        <p>Hi my name is Jayanta , I am learning rect is  a slow pace with sarthak bhaiya from sheriyan codding school yt channel</p>
        <div className='button'>View Profile</div>
      </div>
  )
}

export default Card
