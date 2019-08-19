// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var res = l1||l2?new ListNode():null
    var now=res
    while (l1 || l2) {
        if(l2&&!l1){
            now.val = l2.val
            l2 = l2.next
        }
        else if(!l2&&l1){
            now.val = l1.val
            l1 = l1.next
        }else{
            if (l1.val<= l2.val) {
            now.val = l1.val
            l1 = l1.next
        } else {
            now.val = l2.val
            l2 = l2.next
        }
        }
        if(l1||l2){
            now.next=new ListNode()
            now = now.next
        }
    }
    return res
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    var res = new ListNode(null)
    var now=res
    while (l1 && l2) {
        if (l1.val<= l2.val) {
            now.next = l1
            l1 = l1.next
        } else {
            now.next = l2
            l2 = l2.next
        }
        now = now.next
    }
    now.next=l1||l2
    return res.next
};