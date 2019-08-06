// var findMedianSortedArrays = function(nums1, nums2) {
//     var num=[...nums1,...nums2]
//     num.sort((a,b)=>a-b)
//     var len=num.length
//     var middlenum=0
//     var len2=Math.floor(len/2)
//     if(len%2==0){
//         middlenum=(num[len2-1]+num[len2])/2
//     }else{
//         middlenum=num[len2]
//     }
//     return middlenum
// };

var findMedianSortedArrays = function(nums1, nums2) {
    var num=[...nums1,...nums2].sort((a,b)=>a-b)
    var len=num.length
    len=+((len/2).toString().split('.')[0])
    return num.length%2==0?(num[len-1]+num[len])/2:num[len]
};
findMedianSortedArrays([1,3],[2])