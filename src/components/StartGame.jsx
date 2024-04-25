import React from 'react'
import './StartGame.css'

const StartGame = ({toggle}) => {
  return (
    <div className='start-game'>
      <div className="dice-img-div">
        <img src="images/dices.png" alt="" />
      </div>
      <div className="title">
        <h1>DICE GAME</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  )
}

export default StartGame
