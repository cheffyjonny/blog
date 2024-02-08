---
title: Reverse Linked List

tags: ["JavaScript", "PHP", "C#"]
---

# Reverse Linked List


## Question
Given the `head` of a singly linked list, reverse the list, and return the _**reversed list**_.


#### Example 1
![An image](./rev1ex1.jpg) <br>

Input: `head = [1,2,3,4,5]` <br>
Output: `[5,4,3,2,1]` <br>

#### Example 2
![An image](./rev1ex2.jpg) <br>
Input: `head = [1,2]` <br>
Output: `[2,1]` <br>

#### Example 3
Input: `head = []` <br>
Output: `[]` <br>

## Introduction & Problem Understanding
Simple question, simple solution. <br>
The linked list just needs to link the other way around. To do this, there are three parts that need to know<br>

1. A(previous node, it will be `null` at the start.)
2. B(current node)
3. C(next node)

From <br>
null -> A -> B -> C -> D -> ... <br>

To <br>
null <- A -> B -> C -> D -> ... <br>

Then <br>
null <- A <- B -> C -> D -> ... <br>

continue until the `head === null` 



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
     * @param ListNode $head
     * @return ListNode
     */
    function reverseList($head) {
        $prev = null;
        $curr = $head;
        
        while(!is_null($curr->val)){
            $nextNode = $curr->next;
            $curr->next = $prev;
            $prev = $curr;
            $curr = $nextNode;
        }
        return $prev;
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
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        ListNode nextNode = null;

        while(curr != null)
        {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
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
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
    prev = null;
    curr = head;
    
    while(curr){
        let tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }
    return prev

}
```

</code-block>
</code-group>



<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

