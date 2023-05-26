import React, { useState } from 'react'
import './Board.scss'

export const Board = () => {
    const [value, setValue] = useState(null);

    //usestate that establishes a value that determines which player's turn it is
    let [playerTurn, setPlayerTurn] = useState('X')



    const handleClick = () => {
        if (playerTurn === 'X') {
          setValue('X');  
        } else {
            setValue('O')
        }
        
    }

    //function that changes playerTurn after the button for a square is clicked

    // const changePlayer = () => {

    // }


  return (
    <div className='board'>
        <div className='board1'>
            <div className="board-row">
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
            </div>

            <div className="board-row">
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
            </div>

            <div className="board-row">
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
                <button className="square" onClick={()=>handleClick()}>{playerTurn}</button>
            </div>
        </div>

    </div>
  )
}


// switch (num){
//     case '1':
//         setValue("X");
//         console.log("Player 2, your turn")
//         break;
//     case '2':
//         setValue("X");
//         setTotal(total += toyota);
//         break;
//     default:
//         setChevy(++chevy);
//         setTotal(total += chevy);
// }