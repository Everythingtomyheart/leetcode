// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:

// 输入: candidates = [2,3,6,7], target = 7,
// 所求解集为:
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2:

// 输入: candidates = [2,3,5], target = 8,
// 所求解集为:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combination-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum = function(candidates, target) {
//   let res = [];
//   if (candidates.includes(target)) {
//     res.push([target])
//   }
//   for (var i = 0; i < candidates.length; i++){
//     if(target-candidates[i]<=0){
//       continue
//     }
//     let lres = combinationSum(candidates, target - candidates[i])
//     for (let j = 0; j < lres.length; j++){
//       lres[j].push(candidates[i])
//       let r=lres[j].sort((a,b)=> a-b)
//       if (!res.some(value => value.join("") === r.join(""))) {
//         res.push(r)
//       }
//     }
//   }
//   return res
// };
var combinationSum = function (candidates, target) {
  // 由大到小排序
  candidates.sort((a, b) => b - a);

  let res = [], path = [];
  let len = candidates.length, minNum = candidates[len - 1]; // 缓存长度

  combin(candidates, target, 0, path);
  //path函数
  function combin(candidates, target, start, path) {
    if (target == 0) {
      // 向res中添加path结果， 并退出函数
      return res.push(path.slice());
    }

    // 这里不用小于 0，小于最小的数就可以返回了
    if (target < minNum) return;
    // 从start开始循环candidates
    for (let i = start; i < len; i++) {
      // 加入当前对应值进行值判断
      path.push(candidates[i]);
      combin(candidates, target - candidates[i], i, path);
      //在一次循环完成后取出当前i对应数值
      path.pop();
    }
  }

  return res;
};
let res=combinationSum([2,3,6,7],7)
console.log(res)
