import React, { useState } from 'react'
import "./GamePlay.css"
import Num from "../assets/Num"
import styled from 'styled-components';
import RoleDice from './RoleDice';
import Rules from './Rules';

const GamePlay = () => {

    const [score, setScore] = useState(0)
    const [selectedNum, setSelectedNum] = useState()
    const [currDice, setCurrDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)
    // console.log(selectedNum)

    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () =>{

        const randomNumber = generateRandomNumber(1,7)

        if(!selectedNum){
            setError("You have not selected any number")
            return;
        }
        setError("");


        setCurrDice((prev) => randomNumber)        

        if (selectedNum ===randomNumber) {
            setScore((prev) => prev + randomNumber)
        }
        else{
            setScore((prev) => prev - 2)
        }

        setSelectedNum(undefined)
    }

    const NumberSelectorHandler = (score) => {
        setSelectedNum(score)
        setError("")
    }

    const resetScore = () =>{
        setScore(0)
    }
  return (
    <>
    <main>
        <div className='score-div'>
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
        <div className="select-num">
            <div className="error-div">{error}</div>
        <div className="number-div">
            {
                Num.map((data) => {
                 const {id, score} = data;
                 return(
                    <Box 
                    className="num-box" 
                    key={id} 
                    isSelected = {selectedNum === score}
                    onClick={() => NumberSelectorHandler(score)}
                    // onClick={() => setSelectedNum(score)}
                    >
                        {score}
                    </Box>
                 )  
                })                
            }            
        </div>
        <p>Select Number</p>
        </div>           
    </main>
    <div className="role-dice">
        <RoleDice roleDice={roleDice} currDice={currDice} />
    </div>
    <div className="btns">
        <button className='btn-1' onClick={resetScore}>Reset Score</button>
        <button className='btn-2' onClick={()=>{setShowRules((prev)=>!prev)}}>{showRules ? "Hide Rules" : "Show Rules"}</button>        
    </div>
    <div className="show-rules">
        {showRules && <Rules/>}
    </div>
    </>
  )
}

export default GamePlay

const Box = styled.div`
    background-color : ${(props) => (props.isSelected ? "black" : "white")};
    color : ${(props) => (!props.isSelected ? "black" : "white")};
    // color : ${(props) => (props.isSelected ? "white" : "black")};
    transition: background-color 0.4s ease-in;
    cursor:pointer;
`;