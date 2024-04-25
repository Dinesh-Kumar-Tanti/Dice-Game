import React from 'react'
import './RoleDice.css'

const RoleDice = ({roleDice, currDice}) => {

    // const [currDice, setCurrDice] = useState(1)
    
    // const generateRandomNumber = (min, max) => {
    //     // console.log(Math.floor(Math.random() * (max - min) + min))
    //     return Math.floor(Math.random() * (max - min) + min);
    // }

    // const roleDice = () =>{
    //     const randomNumber = generateRandomNumber(1,7)

    //     setCurrDice((prev) => randomNumber)
    // }

  return (
    <div className='role-dice'>
        <div className='dice' onClick={roleDice} >
            <img src={`images/dice_${currDice}.png`} alt="" />
        </div>
        <p>Click on the Dice to roll</p>
    </div>
  )
}

export default RoleDice
