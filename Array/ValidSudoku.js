// @param {character[][]} board
// @return {boolean}
 
var isValidSudoku = function(board) {
    // check row if no number is duplicate
    // check column
    // check 3x3 square

    let dict = {}
    let i = board.length - 1
    let j = 0

    while (j < board[i].length && i > 0){
        if(board[i][j] !== '.' && dict[board[i][j]]){
            console.log(false)
            break
        } else {
            dict[board[i][j]] = true
        }
        i--
    }

    while(i > 0){
        dict = {}
        while(j < board[i].length){
            if(board[i][j] !== '.' && dict[board[i][j]]){
                console.log(false)
                break
            } else {
                dict[board[i][j]] = true
            }
            j++
        }
        i--
    }

    let count = 4
    let x = 0
    let y = 0

    while(x < count){
        while(y < count){
            if(board[x][y] !== '.' && dict[board[x][y]]){
                console.log(false)
                break
            } else {
                dict[board[x][y]]
            }
            y++
        }
        x++
    }

    console.log(dict)
};

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

isValidSudoku(board)