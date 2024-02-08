---
title: Longest Substring Without Repeating Characters

tags: ["JavaScript", "PHP", "C#"]
---

# Longest Substring Without Repeating Characters
Re-posted, the original post is at <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/">here</a>

## Question
Given a string `s`, find the length of the longest <VueCustomTooltip label="A substring is a contiguous non-empty sequence of characters within a string."><span style="color:#316dde">**substring**</span></VueCustomTooltip> without repeating characters.


#### Example 1

Input: `s = "abcabcbb"` <br>
Output: `3` <br>
Explanation: `The answer is "abc", with the length of 3.`

#### Example 2

Input: `s = "bbbbb"` <br>
Output: `1` <br>
Explanation: `The answer is "b", with the length of 1`

#### Example 3

Input: `s = "pwwkew"` <br>
Output: `3` <br>
Explanation: `The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring`

#### Constraints:
- `0 <= s.length <= 5 * 104`
- `s` consists of English letters, digits, symbols and spaces.

## Introduction & Problem Understanding
Below are some basic tips for identifying this kind of problem where we could use the sliding window technique:

- The problem will be based on an array, string, or list data structure.
- You need to find the sub range in this array or string that should provide the longest, shortest, or target values.
- A classic problem: to find the largest/smallest sum of given k (for example, three) consecutive numbers in an array.

The length can be **fixed**, as in the example above, or it can be **dynamic**, just like in this problem.

So to solve this problem, we can use the hash table and iterate over our term. Let's do two checks on 0 and 1 so as not to waste extra time. Now we can start, in the picture above you can see our **window** and its movement during the scan. We gradually add our letters to the **hash table**, and if it already contains this letter, we delete the letter corresponding to the leftmost index, do this until we get to the desired one and delete the repetition. Only after that we add our new element.
The maximum length is found by comparing our current length with the new one, using `Math.max`.

## Solution
<code-group>
<code-block title="PHP">

```PHP
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        $arr = [];
        $left = 0;
        $maxSize = 0;

        if (strlen($s) < 2) return strlen($s);

        for($i = 0; $i < strlen($s); $i++){
            $char = $s[$i];
            while(isset($arr[$char])){
                array_shift($arr);
                $left++;
            }
            $arr[$char] = $i;
            $maxSize = max($maxSize, $i - $left + 1);
        }
        return $maxSize;
    }
}
```
</code-block>

<code-block title="C#">

```csharp
public class Solution {
    public int LengthOfLongestSubstring(string s) {
        HashSet<char> hSet = new HashSet<char>();
        int left = 0;
        int maxSize = 0;

        if (s.Length < 2) return s.Length;

        for (int i = 0; i < s.Length; i++){
            while(hSet.Contains(s[i])){
                hSet.Remove(s[left]);
                left ++;
            }
            hSet.Add(s[i]);
            maxSize = Math.Max(maxSize, i - left + 1);
        }
        return maxSize;
    }
}
```
</code-block>

<code-block title="JavaScript">

```js
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length < 2) return s.length;

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
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

