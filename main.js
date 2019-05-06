/**
 * Creating a factory function to expose only those functions that are required
 */

const Chess = () => {
    let lastMove = null;
    const validMoves = {
        EX : "X",
        ZERO : "0"
    }
    const makeChessBoard = () => {
        let drawBoard = '';
    }
    const makeAmove = (ev) => {
        if(ev.target.textContent === '') {
            if (lastMove === null) {
                lastMove = validMoves.EX;
                ev.target.textContent = lastMove;
            
            } else if (lastMove === validMoves.EX) {
                lastMove = validMoves.ZERO;
                ev.target.textContent = lastMove;
            
            } else {
                lastMove = validMoves.EX;
                ev.target.textContent = lastMove;
            }
        }
    }
    return { makeAmove };
}

const {makeAmove} = Chess(); 

document.getElementById("myTable").addEventListener("click", makeAmove);