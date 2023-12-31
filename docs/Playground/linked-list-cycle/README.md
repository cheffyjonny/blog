---
title: Linked List Cycle

tags: ["JavaScript", "PHP", "C#"]
---

# Linked List Cycle

## Question

Given `head`  , the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

#### Example 1
![An image](./circularlinkedlist.png) <br>
Input: head = [3,2,0,-4], pos = 1 <br>
Output: true <br>
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

#### Example 2
![An image](./circularlinkedlist_2.png) <br>
Input: head = [1,2], pos = 0 <br>
Output: true <br>
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

#### Example 3
![An image](./circularlinkedlist_3.png) <br>
Input: head = [1], pos = -1 <br>
Output: false <br>
Explanation: There is no cycle in the linked list.

## Introduction & Problem Understanding
In this problem, you are given the head of a singly-linked list. The objective is to determine whether the list contains a cycle. A cycle exists if a node in the list can be visited more than once by following the `next` pointers continuously.

### Key Concepts and Constraints
1. **Node Anatomy:** <br>
Each node in the list contains an integer value and a next pointer that points to the subsequent node in the list.

2. **Cycle Detection:** <br>
The primary task is to identify whether a cycle exists within the list. If a cycle is detected, the function should return True. Otherwise, it should return False.

3. **Memory Efficiency:** <br>
The question poses an implicit challenge: Can you solve it using **_O(1)_** memory, meaning constant extra space?

### Strategies to Tackle the Problem
1. **Hash Table Method:** <br>
This approach involves storing visited nodes in a hash table. During traversal, if a node is encountered that already exists in the hash table, a cycle is confirmed.

2. **Two-Pointers Method (Floyd's Cycle-Finding Algorithm):** <br>
Also known as the "hare and tortoise" algorithm, this method employs two pointers that move at different speeds. If there is a cycle, the fast pointer will eventually catch up to the slow pointer, confirming the cycle's existence.

## Solutions

### Solution #1: Hash Table Method

#### Intuition and Logic Behind the Solution
The basic idea here is to traverse the list and keep a record of the nodes we've visited so far. If at any point we encounter a node that we've already visited, we can conclude that there is a cycle in the list.

#### Step-by-step Explanation
1. **Initialization:**<br>
Create an empty set, `visited_nodes`, to keep track of the nodes that have been visited.

2. **Traversal and Verification:**<br>
Traverse the list starting from the head node.
At each node, check whether it already exists in `visited_nodes`.
If it does, return `True` as a cycle is detected.
Otherwise, add the node to `visited_nodes`.

#### Complexity Analysis
- Time Complexity: **_O(n)_** — Each node is visited once.
- Space Complexity: **_O(n)_** — To store visited nodes.

<code-group>
<code-block title="PHP">

```PHP
class Solution {
    function hasCycle($head) {
        $visited_nodes = [];
        $current_node = $head;
        while ($current_node !== null) {
            if (in_array($current_node, $visited_nodes, true)) {
                return true;
            }
            $visited_nodes[] = $current_node;
            $current_node = $current_node->next;
        }
        return false;
    }
}
```
</code-block>

<code-block title="C#">

```csharp
public class Solution {
    public bool HasCycle(ListNode head) {
        HashSet<ListNode> visited_nodes = new HashSet<ListNode>();
        ListNode current_node = head;
        while (current_node != null) {
            if (visited_nodes.Contains(current_node)) {
                return true;
            }
            visited_nodes.Add(current_node);
            current_node = current_node.next;
        }
        return false;
    }
}
```
</code-block>

<code-block title="JavaScript">

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited_nodes = new Set();
    let current_node = head;
    while (current_node !== null) {
        if (visited_nodes.has(current_node)) {
            return true;
        }
        visited_nodes.add(current_node);
        current_node = current_node.next;
    }
    return false;
};
```

</code-block>
</code-group>

### Solution #2: Two-Pointer Method (Floyd's Cycle-Finding Algorithm)

#### Intuition and Logic Behind the Solution
Also known as the "hare and tortoise" algorithm, this method uses two pointers that traverse the list at different speeds. The slow pointer moves one step at a time, while the fast pointer moves two steps. If there is a cycle, the fast pointer will eventually catch up to the slow pointer.

#### Step-by-step Explanation
1. **Initialization:**<br>
Initialize two pointers, slow_pointer and fast_pointer, both pointing to the head node initially.

2. **Traversal and Verification:**<br>
Traverse the list until the `fast_pointer` or its `next` becomes `None`.
Update `slow_pointer` and `fast_pointer` as follows:
`slow_pointer = slow_pointer.next`
`fast_pointer = fast_pointer.next.next`
If `slow_pointer` and `fast_pointer` meet at some point, return `True`.

#### Complexity Analysis
- Time Complexity: **_O(n)_**  — In the worst-case scenario, each node is visited once.
- Space Complexity: **_O(1)_** — Constant space is used.

<code-group>
<code-block title="PHP">

```PHP
class Solution {
    function hasCycle($head) {
        $visited_nodes = [];
        $current_node = $head;
        while ($current_node !== null) {
            if (in_array($current_node, $visited_nodes, true)) {
                return true;
            }
            $visited_nodes[] = $current_node;
            $current_node = $current_node->next;
        }
        return false;
    }
}
```
</code-block>

<code-block title="C#">

```csharp
public class Solution {
    public bool HasCycle(ListNode head) {
        HashSet<ListNode> visited_nodes = new HashSet<ListNode>();
        ListNode current_node = head;
        while (current_node != null) {
            if (visited_nodes.Contains(current_node)) {
                return true;
            }
            visited_nodes.Add(current_node);
            current_node = current_node.next;
        }
        return false;
    }
}
```
</code-block>

<code-block title="JavaScript">

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited_nodes = new Set();
    let current_node = head;
    while (current_node !== null) {
        if (visited_nodes.has(current_node)) {
            return true;
        }
        visited_nodes.add(current_node);
        current_node = current_node.next;
    }
    return false;
};
```

</code-block>
</code-group>

## Reflections on Cycle Detection
Both the Hash Table and Two-Pointers methods offer compelling strategies for detecting cycles in linked lists. <br>

1. **Hash Table Method**:
Intuitive and adaptable, though potentially memory-intensive.

2. **Two-Pointers Method**:
A marvel of memory efficiency, but perhaps less straightforward to the uninitiated.


Navigating this problem is a dive into data structure nuances and algorithmic elegance. Whether you appreciate the directness of the Hash Table or the finesse of Two-Pointers, each method champions a facet of computational acumen. This isn't just a problem; it's a step in honing algorithmic artistry.


<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

