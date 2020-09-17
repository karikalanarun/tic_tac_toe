
/*
`
empty board:

E E E
E E E
E E E

E X E
E E E
E E E

E X O
E E E
E E E
`
*/

const readlineSync = require("readline-sync")

function createEmptyBoard() {
    let board = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let i = 0; i < 3; i++) {
            row.push("E")
        }
        board.push(row)
    }
    return board
}

function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        let row = ""
        for (let j = 0; j < board[i].length; j++) {
            row = row + "  " + board[i][j]
        }
        console.log(row)
    }
}

function checkAllCellsFilled(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i].indexOf('E') !== -1) {
            return false
        }
    }
    return true
}


let board = createEmptyBoard()

printBoard(board)
while (!checkAllCellsFilled(board)) {

    const row = parseInt(readlineSync.question('Give me the row: '), 10)
    const col = parseInt(readlineSync.question('Give me the col: '), 10)

    board[row][col] = 'X'

    printBoard(board)
}


