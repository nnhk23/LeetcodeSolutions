// Example 4:
// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]

// Example 3:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// @param {number[][]} matrix
// @return {void} Do not return anything, modify matrix in-place instead.

var rotate = function(matrix) {
    if(matrix.length > 1){
        let temp = JSON.parse(JSON.stringify(matrix));
        
        for(let i = 0; i < matrix.length; i++){
            let j = 0;
            while(j < matrix[i].length){
                let len = matrix[i].length - 1
                matrix[i][j] = temp[len - j][i]
                j++ 
            }
        }
        
        return matrix
    } else {
        return
    }
};

let matrix = [[1,2],[3,4]]
rotate(matrix)