// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
// 示例 1:

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入:
// s = "aa"
// p = "a*"
// 输出: true
// 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
// 示例 3:

// 输入:
// s = "ab"
// p = ".*"
// 输出: true
// 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
// 示例 4:

// 输入:
// s = "aab"
// p = "c*a*b"
// 输出: true
// 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
// 示例 5:

// 输入:
// s = "mississippi"
// p = "mis*is*p*."
// 输出: false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function (s, p) {
//     var results =  [...Array(p.length)].map(() => Array(s.length).fill(false))
//     results[0][0]=true
//     for (var i = 1; i < p.length; i++){ // 遍历字符串p
//         results[i][0] = p[i - 1] == '*' ? results[i - 2][0] : false; // 匹配p中的从第二个元素开始的每一个元素与p的第一个元素的关系
//         for (var j = 1; j < s.length; j++){ //遍历s字符串，判断s中的每一个元素与当前p对应元素的关系
//             if (p[i - 1] == '*') { // 遍历的p的当前元素是否为*
//                 if (s[j - 1] != p[i - 2] && p[i - 2] != '.') { 
//                     results[i][j] = results[i - 2][j]; //相当于*一次都不用
//                 }
//                 else {
//                     results[i][j] = results[i - 2][j] || results[i - 1][j] || results[i][j - 1]; //*一次都不用或者用一次或者用多次
//                 }
//             }
//             else if (p[i - 1] == '.' || p[i - 1] == s[j - 1]) {
//                 results[i][j] = results[i - 1][j - 1]; // 逐个比较
//             }
//         }
//     }
//     return results[p.length-1][s.length-1]
// };
// // console.log(isMatch("mississippi", "*mis*is*p*."));
// console.log(isMatch("aab", "c*a*b"));