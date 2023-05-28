import React, { useState } from 'react'
import './Board.scss'

export const Board = () => {
    //usestate that establishes a value that determines which player's turn it is
    let [playerTurn, setPlayerTurn] = useState('X')
    //Track which items are being clicked. Default will be an empty string that will eventually be x or o.
    const [cells, setCells] = useState(Array(9).fill(""))

    

    const handleClick = (num) => {
        //Create squares variable and copy array of empty cells
        let squares = [...cells];

        if (playerTurn === 'X') {
            //Set that number square in array to X
            squares[num] = "X";
            setPlayerTurn('O');  
        } else {
            //Set that number square in array to O
            squares[num] = "O";
            setPlayerTurn('X')
        }
        //Update cells state variable to the squares array so it remembers each item that is clicked
        setCells(squares)
        console.log(squares);
    }

    //Establish array's with the winning combinations of the game

    // const winningCombos = [
    //     [0, 1, 2], [3, 4, 5], [6, 7, 8], //Rows
    //     [0, 3, 6], [1, 4, 7], [2, 5, 8], //Columns
    //     [0, 4, 8], [2, 4, 6] //Diagnonals 
    // ];

    // if (winningCombos[0] = ['X','X','X']) {
    
    // }    

    //Check if user inputs statisfy the requirements for winning a game

    //display to the users that one of the players has won if there inputs statisfy the requirements for winning


  return (
    <div className='container'>
        Turn: {playerTurn}
        <div className='board'>

            <div className='board1'>

                <div className="board-row">
                    <button className="square" num={0} onClick={()=>handleClick(0)}>{cells[0]}</button>
                    <button className="square" num={1} onClick={()=>handleClick(1)}>{cells[1]}</button>
                    <button className="square" num={2} onClick={()=>handleClick(2)}>{cells[2]}</button>
                </div>

                <div className="board-row">
                    <button className="square" num={3} onClick={()=>handleClick(3)}>{cells[3]}</button>
                    <button className="square" num={4} onClick={()=>handleClick(4)}>{cells[4]}</button>
                    <button className="square" num={5} onClick={()=>handleClick(5)}>{cells[5]}</button>
                </div>

                <div className="board-row">
                    <button className="square" num={6} onClick={()=>handleClick(6)}>{cells[6]}</button>
                    <button className="square" num={7} onClick={()=>handleClick(7)}>{cells[7]}</button>
                    <button className="square" num={8} onClick={()=>handleClick(8)}>{cells[8]}</button>
                </div>

            </div>

        </div>
        

    </div>
  )
}
