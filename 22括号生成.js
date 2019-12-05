// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * 回溯 
 * 参考题解 https://leetcode-cn.com/problems/generate-parentheses/solution/gua-hao-sheng-cheng-by-leetcode/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var res = []
    backtrack(res, "", 0, 0, n)
    return res
};
var backtrack = function (arr, str, left, right, max) {
    if (str.length == max * 2) {
        arr.push(str);
        return;
    }
    if (left < max)
        backtrack(arr, str + "(", left + 1, right, max);
    if (right < left)
        backtrack(arr, str + ")", left, right + 1, max);
}
console.log(generateParenthesis(3));

/**
 * 动态规划 
 * 参考题解 https://leetcode-cn.com/problems/generate-parentheses/solution/zui-jian-dan-yi-dong-de-dong-tai-gui-hua-bu-lun-da/ 
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n == 0)
        return []
    var total = []
    total.push([""])    // 0组括号时记为null
    total.push(["()"])    // 1组括号只有一种情况
    for (var i = 2; i < n + 1; i++) {
        l = []
        for (var j = 0; j < i; j++) {
            // 开始遍历 p q ，其中p+q=n-1 , j 作为索引
            var lefts = total[j]    // p = j 时的括号组合情况
            var rights = total[i - 1 - j]    // q = (i-1) - j 时的括号组合情况
            for (let left of lefts) {
                for (let right of rights) {
                    el = "(" + left + ")" + right
                    l.push(el)    // 把所有可能的情况添加到 l 中
                }
            }
        }
        total.push(l)    // l这 个list就是i组括号的所有情况，添加到total中，继续求解i=i+1的情况
    }    // 开始计算i组括号时的括号组合
    return total[n]
};

console.log(generateParenthesis(3));

// 动态规划推算
// n = 0 ""
// n = 1 ["()"]
// n = 2 ["()()", "(())"]
// n = 3 ["()()()", "()(())", "(())()", "(()())", "((()))"]
