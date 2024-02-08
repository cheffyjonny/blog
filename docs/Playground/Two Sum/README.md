---
title: Two Sum

tags: ["JavaScript", "PHP", "C#"]
---

# Two Sum

## Question

Given an array of integers `nums` and an integer `target`, return __indices of the two numbers__ such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

#### Example 1
Input: `nums = [2,7,11,15], target = 9` <br>
Output: `[0,1]` <br>
Explanation: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

#### Example 2
Input: `nums = [3,2,4], target = 6` <br>
Output: `[1,2]` <br>

#### Example 3
Input: `nums = [3,3], target = 6` <br>
Output: `[0,1]` <br>

#### Constraints:
- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- Only one valid answer exists.

#### Follow-up:
Can you come up with an algorithm that is less than O(n2) time complexity?

## Solutions
It's very self explanatory on the code...

Just one little thing, I have to define the `result` array, as `forEach` loop only returns from the callback function passed to `forEach`, not from the `twoSum` function itself.
```js
let result = [];
.
.
.
if(hashMap.indexOf(remain) !== -1){
    return result = [nums.indexOf(remain), i]
} 
.
.
.
return result
```

### Complexity Analysis
- Time Complexity: **_O(n)_** — In the worst case, it visits every element exactly once.
- Space Complexity: **_O(n)_** —  In the worst case, it could store all the elements of the nums array.

<code-group>
<code-block title="PHP">

```PHP
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $hashMap = [];
        foreach($nums as $i => $num){
            $find = $target - $num;
            if(isset($hashMap[$find])){
                return [$hashMap[$find], $i];
            }
            $hashMap[$num] = $i;
        }
    }
}
```
</code-block>

<code-block title="JavaScript">

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = [];
    let result = [];

    nums.forEach((num, i)=>{
        let remain = target - num
        
        if(hashMap.indexOf(remain) !== -1){
            return result = [nums.indexOf(remain), i]
        } 
        hashMap.push(num)
        
    })

    return result
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

