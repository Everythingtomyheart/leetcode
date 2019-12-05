// var combinationSum2 = function (candidates, target) {
//   // 由大到小排序
//   candidates.sort((a, b) => b - a);

//   let res = [], path = [], pathi = [];
//   let len = candidates.length, minNum = candidates[len - 1]; // 缓存长度

//   combin(candidates, target, 0, path);
//   //path函数
//   function combin(candidates, target, start, path) {
//     if (target == 0) {
//       // 向res中添加path结果， 并退出函数
//       pathi.slice()
//       let r = path.slice().sort((a,b)=>a-b);
//       if (!res.some(i => i.join("") === r.join("")))
//         return res.push(r);
//       else
//         return res
//     } 

//     // 这里不用小于 0，小于最小的数就可以返回了
//     if (target < minNum) return;
//     // 从start开始循环candidates
//     for (let i = start; i < len; i++) {
//       // 加入当前对应值进行值判断
//       if (!pathi.includes(i)) {
//         pathi.push(i)
//         path.push(candidates[i]);
//         combin(candidates, target - candidates[i], i+1, path);
//         //在一次循环完成后取出当前i对应数值
//         pathi.pop(i)
//         path.pop();
//       }
//     }
//   }

//   return res;
// };
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  var result = [], n = candidates.length

  function backtrack(start, sum, list) {
      if (sum === target) {
          result.push(list)
      }
      for (let i = start; i < n; i++) {
          if (candidates[i] + sum > target) break;
          //相同数字只允许循环的第一个递归，避免重复
          if (candidates[i] === candidates[i - 1] && i > start) continue;
          backtrack(i + 1, sum + candidates[i], [...list, candidates[i]])
      }
  }

  backtrack(0, 0, [])
  return result
};
console.log(combinationSum2([10,1,2,7,6,1,5], 8))