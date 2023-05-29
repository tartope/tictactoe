import React, { useState } from 'react'
import './Board.scss'

export const Board = () => {
    //usestate that establishes a value that determines which player's turn it is
    let [playerTurn, setPlayerTurn] = useState('X')
    //Track which items are being clicked. Default will be an empty string that will eventually be x or o.
    const [xoInput, setXoInput] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();

    //usestate that creates a counter to count the number of turns of both players
    let [count, setCount] = useState(0);
    console.log(count);

    let [stringCounter, setStringCounter] = useState("");
    
    //Establish array's with the winning combinations of the game   
    //Check if user inputs statisfy the requirements for winning a game
    const checkWinner = (squares) => {
        const winningCombos = {
            across: [
                [0, 1, 2],
                [3, 4, 5], 
                [6, 7, 8], 
            ],
            down:[
                [0, 3, 6],
                [1, 4, 7], 
                [2, 5, 8], 
            ],
            diagonal: [
                [0, 4, 8], [2, 4, 6] 
            ]
        }

        for (let combo in winningCombos) {
            winningCombos[combo].forEach((pattern) =>{
                if (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '' ) {
                    //do nothing
                } else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
                    setWinner(squares[pattern[0]]);
                    console.log(winner)
                }
            });
        }
    };

    const handleClick = (num) => {
        if (xoInput[num] !== ""){
            return;
        }

        //Create squares variable and copy array of empty cells
        let squares = [...xoInput];

        if (playerTurn === 'X') {
            //Set that number square in array to X
            squares[num] = "X";
            setPlayerTurn('O');
            setCount(count += 1); 
            setStringCounter(stringCounter + " " + count);
        } else {
            //Set that number square in array to O
            squares[num] = "O";
            setPlayerTurn('X')
            setCount(count += 1);
            setStringCounter(stringCounter + " " + count);
        }
        //Update cells state variable to the squares array so it remembers each item that is clicked
        checkWinner(squares);
        setXoInput(squares)
        // console.log(squares);
    }

    const handleReset = () => {
        setWinner(null);
        setXoInput(Array(9).fill(""));
        setCount(0);
        setPlayerTurn('X')
        setStringCounter("");
    }

  return (
    <div className='container'>
        {winner ? null : `Player ${playerTurn}, it's your turn!` }
        <br/>
        Count: {stringCounter}
        <div className='board'>
            <table>
                <tbody>

                    <tr className="board-row">
                        <td><button className="square" num={0} onClick={()=>handleClick(0)}>{xoInput[0]}</button></td>
                        <td><button className="square" num={1} onClick={()=>handleClick(1)}>{xoInput[1]}</button></td>
                        <td><button className="square" num={2} onClick={()=>handleClick(2)}>{xoInput[2]}</button></td>
                    </tr>

                    <tr className="board-row">
                        <td><button className="square" num={3} onClick={()=>handleClick(3)}>{xoInput[3]}</button></td>
                        <td><button className="square" num={4} onClick={()=>handleClick(4)}>{xoInput[4]}</button></td>
                        <td><button className="square" num={5} onClick={()=>handleClick(5)}>{xoInput[5]}</button></td>
                    </tr>

                    <tr className="board-row">
                        <td><button className="square" num={6} onClick={()=>handleClick(6)}>{xoInput[6]}</button></td>
                        <td><button className="square" num={7} onClick={()=>handleClick(7)}>{xoInput[7]}</button></td>
                        <td><button className="square" num={8} onClick={()=>handleClick(8)}>{xoInput[8]}</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
        {/* //display to the users that one of the players has won if there inputs statisfy the requirements for winning */}
        {/* { winner && <p>Player {winner} is the winner!</p>} */}
        { winner === 'X' || winner === 'O' ? <p>Player {winner} is the winner!</p> : null}
        { count === 9 && (winner === 'X' || winner === 'O') ? <p>It's a tie</p> : null }
        <br/>
        <button onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}


