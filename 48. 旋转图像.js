/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    for (let i = 0; i <= Math.floor(n / 2); i++) {
        for (let j = i; j < n - i - 1; j++) {
            let index = 0;
            let temp = null;
            while (index < 4) {
                let t = matrix[j][n - i - 1]
                matrix[j][n - i - 1] = temp == null ? matrix[i][j] : temp
                temp = t
                let I = i
                i = j
                j = n - I - 1;
                index += 1
            }
        }
    }
    return matrix
};
