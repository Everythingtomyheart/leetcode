// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G



var convert = function (s, numRows) {
    var length=s.length
    if (numRows==1||numRows >= length ) {
        return s
    }
    let rows = new Array(numRows).fill("")
    let index=0 //当前截取回合数
    let len=numRows*2-2 //每次截取字符串的长度
    let floornum=numRows-1 //截取数据最多存放到数组的哪一索引
    let now=s.substring(index,len) //截取子串
    var sum=index*len
    while(sum<length){
        for (var i = 0; i < len; i++){
            rows[i>floornum?len-i:i]+=now[i]?now[i]:""
        }
        index+=1
        sum=index*len
        now=s.substring(sum,sum+len)
    }
    return rows.join("")
};
convert("PAYPALISHIRING",3)