/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var maxprefix = ""
    if (strs.length != 0) {
        strs = strs.sort()
        maxprefix = strs[0]
        for (var i = 0; i < strs.length; i++) {
            for (var j = 0; j < strs[i].length && j < maxprefix.length; j++) {
                if (maxprefix[j] != strs[i][j])
                    break;
            }
            maxprefix = maxprefix.substring(0, j)
            if (maxprefix == "") {
                break;
            }
        }
    }
    console.log(maxprefix);
    return maxprefix
};
longestCommonPrefix(["abab", "aba", ""])
longestCommonPrefix(["flower", "flow", "flight"])
longestCommonPrefix(["flower", "flight", "flow"])