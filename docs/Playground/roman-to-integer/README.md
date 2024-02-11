---
title: Roman to Integer

tags: ["JavaScript"]
---

# Roman to Integer

## Question
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

| Symbol  | Value |
| --------| ----- |
| I       | 1     |
| V       | 5     |
| X       | 10    |
| L       | 50    |
| C       | 100   |
| D       | 50    |
| M       | 1000  |

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

#### Example 1
Input: `s = "III"` <br>
Output: `3` <br>

#### Example 2
Input: `S = LVIII` <br>
Output: `58` <br>
Explanation: L = 50, V= 5, III = 3.

#### Example 3
Input: `S = MCMXCIV` <br>
Output: `1994` <br>
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4

#### Constraints:
- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is guaranteed that `s` is a valid roman numeral in the range `[1, 3999]`.


## Solutions
### Intuition
To solve this problem, we need to create a hash table, the characters in which will correspond to a certain number.

### Approach
1. Loop through the Roman.
2. Set if statement for special occasions..
3. Sum the integers.

### Complexity Analysis
- Time Complexity: **_O(n)_** 
- Space Complexity: **_O(1)_** 

<code-group>


<code-block title="JavaScript">

```js
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const translations = {
        'M':1000,
        'D':500,
        'C':100,
        'L':50,
        'X':10,
        'V':5,
        'I':1
    };

    let result = 0
  

    for(let i = 0; i < s.length; i++){
        let curr = translations[s[i]]
        let next = translations[s[i + 1]]
        if(curr < next){
            result += next - curr
            i++
        } else {
            result += curr
        }
    }
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

