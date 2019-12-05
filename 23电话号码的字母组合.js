// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

//https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w', 'x', 'y', 'z'],
    }
    if (digits.length == 0) {
        return []
    }
    var res = [map[digits[0]]]
    for (var i = 1; i < digits.length; i++){
        res[i] = []
        for (var j = 0; j < res[i - 1].length; j++){
            for (var k = 0; k < map[digits[i]].length; k++){
                res[i].push(res[i-1][j]+map[digits[i]][k])
            }
        }
    }
    return res[digits.length-1]
};

console.log(letterCombinations('23456'));