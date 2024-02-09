---
title: Linked List Add Two Numbers

tags: ["JavaScript", "PHP", "C#"]
---

# Linked List Add Two Numbers


## Question
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

#### Example 1
![An image](./addtwonumber.jpg) <br>
Input: `l1 = [2,4,3], l2 = [5,6,4]` <br>
Output: `[7,0,8]` <br>
Explanation: `342 + 465 = 807`

#### Example 2

Input: `l1 = [0], l2 = [0]` <br>
Output: `[0]` <br>

#### Example 3

Input: `l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]` <br>
Output: `[8,9,9,9,0,0,0,1]` <br>

#### Constraint
- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Introduction & Problem Understanding
In this problem, you need to calculate the sum of reversed Linked lists. <br>
Mathematics calculates number from the right to left. <br>
e.g.<br> 
`38895`<br>
`+ 369`<br>
`39264`<br><br>

Since you need to reverse the sum for the result, you can calculate the sum without reversing the linked lists with carry parameter.<br>
(It calculates from left to right.)

e.g.<br> 
`59883`<br>
`963`<br>
`46293`<br><br>
Explanation: <br>
#### Index 0
Add those numbers ( index = 0 => 5 + 9 => 14 )<br>
Carry it if it is greater than 9 ( let carry = 14 / 10 => 1 )<br>
Increase the index ( index + 1 )<br>

#### Index 1
Get the number by index ( index = 1 => 9, 6 )
Add those numbers and carry ( 9 + 6 + 1)
Carry it if it is greater than 9 ( let carry = 16 / 10 => 1 )
Increase the index ( index + 1 => 2 )
 
Continue until the values and carry 0

## Solutions
<code-group>
<code-block title="PHP">

```PHP
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2, $carry = 0) {
        if($l1 == null && $l2 == null && $carry == 0) return null;  

        $total = ($l1->val ?? 0) + ($l2->val ?? 0) + $carry;
        $carry = floor($total / 10);

        return new ListNode($total % 10, $this->addTwoNumbers($l1->next, $l2->next, $carry));
    }
}
```
</code-block>

<code-block title="C#">

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2, int carry = 0) {
        if(l1 == null && l2 == null && carry == 0 ) return null;

        int total = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;
        carry = total / 10;

        return new ListNode(total % 10, AddTwoNumbers(l1?.next, l2?.next, carry));
    }
}
```
</code-block>

<code-block title="JavaScript">

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry = 0) {
    if(!l1 && !l2 && !carry) return null

    const total = (l1?.val ??  0) + (l2?.val ?? 0) + (carry || 0)
    carry = parseInt(total / 10);

    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry))
};
```

</code-block>
</code-group>


<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

