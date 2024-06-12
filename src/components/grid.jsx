import { useState } from "react";
import Card from "./card/card";
import './grid.css';
import isWinner from "../checkWinner";
function Grid({numberofcards}){
const [board,setboard]=useState(Array(numberofcards).fill(""));
const [turn,setTurn]=useState(true);
const [winner,setWinner]=useState(null);
function play(idx){
if(turn == true){
    board[idx]="O";
}
else {
    board[idx]="X";
}
const win=isWinner(board,turn ? "O":"X");
if(win){
    setWinner(win);
}
setboard([...board]);
setTurn(!turn);

}
function reset(){
setTurn(true);
setWinner(null);
setboard(Array(numberofcards).fill(""));
}
return (
    <div className="grid-wrapper">
    {
        winner && (
            <>
            <h1 className="turn-highlight">Winner is {winner}</h1>
            <button className="reset" onClick={reset}> Reset Game</button>
            </>
        )
    }
    <h1 className="turn-hilight">Current turn:{(turn)?'O':'X'}</h1>
    <div className="grid">
{board.map((ele,idx)=><Card gameend={winner ?true :false} key={idx} onPlay={play} player={ele} index={idx}/>)}
    </div>
    </div>
)
}
export default Grid;