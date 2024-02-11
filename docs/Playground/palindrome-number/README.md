---
title: Palindrome Number

tags: ["JavaScript", "PHP"]
---

# Palindrome Number

## Question
Given an integer `x`, return `true` if `x` is a <VueCustomTooltip label="An integer is a palindrome when it reads the same forward and backward. For example, `121` is a palindrome while `123` is not."><span style="color:#316dde">**palindrome**</span></VueCustomTooltip>, and false otherwise.

#### Example 1
Input: `x = 121` <br>
Output: `true` <br>
Explanation: 121 reads as 121 from left to right and from right to left.

#### Example 2
Input: `x = -121` <br>
Output: `false` <br>
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


#### Example 3
Input: `x = 10` <br>
Output: `false` <br>
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

#### Constraints:
- -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1


## Solutions
### Brute Force Solution
#### Intuition
Convert the integer to a string and check if the string is equal to its reverse.

#### Step-by-step Explanation
1. Convert the integer to a string using to_string() method.
2. Reverse the string using the reverse() method.
3. Compare the original and reversed strings to check if they are equal.
4. If they are equal, return true. Otherwise, return false.

#### Complexity Analysis
- Time Complexity: **_O(n)_** 
- Space Complexity: **_O(n)_** 

<code-group>
<code-block title="PHP">

```PHP
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        $text = (string)$x;
        $reversedText = join(array_reverse(str_split($text)));
        return $text === $reversedText;
    }
}
```
</code-block>

<code-block title="JavaScript">

```js
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const text = x.toString()
    const reversedText = text.split("").reverse().join("")
    return text === reversedText
}; 


```

</code-block>
</code-group>


### Optimized Solution
#### Intuition
Check half of the digits of the integer by extracting the last digit of the integer and adding it to a new integer.

#### Step-by-step Explanation
1. Check if the integer is negative or ends with a zero. If it is, return false.
2. Initialize a new integer half to 0.
3. While the original integer x is greater than half, extract the last digit of x and add it to half by multiplying half by 10 and adding the last digit of x.
4. If the length of x is odd, we need to remove the middle digit from half. To do this, we can simply divide half by 10.
5. Check if x is equal to half or half divided by 10.
6. If they are equal, return true. Otherwise, return false.

#### Complexity Analysis
- Time Complexity: **_O(log n)_** 
- Space Complexity: **_O(1)_** 

<code-group>
<code-block title="PHP">

```PHP
class Solution {
    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        if ($x < 0 || ($x !== 0 && $x % 10 === 0)) {
            return false;
        }

        $half = 0;
    
        while ($x > $half) {
            $half = $half * 10 + $x % 10;
            $x = floor($x / 10);
    
        }
    
        return $x === $half || $x === floor($half / 10);
        
    }
}
```
</code-block>

<code-block title="JavaScript">

```js
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    let half = 0;

    while (x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x / 10);
 
    }
 
    return x === half || x === Math.floor(half / 10);
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

