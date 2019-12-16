/**
 * 回溯法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    /**
     * @param {number[]} nums 代表剩余的可选择数字数组
     * @param {number[]} temp 当前的数据排列数组
     */
    function back(nums, temp) {
        // 可选择数组长度为0时，代表已完全排列，将temp加入返回结果res中，并跳出函数
        if (nums.length == 0) {
            res.push(temp)
            return
        }
        // 循环nums数组
        for (let i = 0; i < nums.length; i++){
            // 获取除i对应数据以外的数据，并将i对应数据填入temp中
            back([...nums.slice(0,i),...nums.slice(i+1)],[...temp,nums[i]])
        }
    }
    // 从头开始回溯操作
    back(nums,[])
    return res
}
