// 1. Palindrome Check: Write a function to check if the given string is a palindrome.

// Their are two methods Using split(), reverse() and join() Methods and Using for loop (Efficient Approach)


// For loop method
function isPalindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[j]) {
        return false;
      }
      j--;
    }
    return true;
  }
  let str1 = "racecar";
  let str2 = "Rama";
  if(isPalindrome(str1)){
      console.log(`${str1} is a palindrome`);
     }else{
         console.log(`${str1} is not a palindrome`);
     }
  // console.log(isPalindrome(str1));
  // console.log(isPalindrome(str2));
  // Using split(), reverse() and join() Methods
  function palindrome(str){
      return str== str.split("").reverse().join("")?true:false
   }
   let val="racecar"
  //  console.log(palindrome(val));


// 2.  Find Largest and Smallest Numbers in an Array:
//    Write a function to find the largest and smallest
//     numbers in an array of numbers.

function findLargestAndSmallest(arr) {
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    return { largest, smallest };
}
// console.log(findLargestAndSmallest([3, 5, 7, 2, 8])); // { largest: 8, smallest: 2 }

//3. Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// -------------------------------------------------------------------------------------------------------------


// 4.Write a function to find the missing number in an array of numbers from 1 to N.

function findMissingNumber(arr, n) {
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((a, b) => a + b, 0);
    return totalSum - arraySum;
}

// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
// -------------------------------------------------------------------------------------------------------------


//5. Write a function to find the longest word in a sentence.

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}


// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"

// -------------------------------------------------------------------------------------------------------------

// 6.Write a function to find the most commonly used character in a string.

function mostCommonChar(str) {
    const charMap = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}
// console.log(mostCommonChar("javascript")); // "a"
// -------------------------------------------------------------------------------------------------------------



//7. Write a function to determine if two strings are anagrams of each other.


function areAnagrams(str1, str2) {
    const sortedStr1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}


// console.log(areAnagrams("listen", "silent")); // true
// -------------------------------------------------------------------------------------------------------------


// 8.Write a function to find the factorial of a given number.

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}
// console.log(factorial(5)); // 120
// -------------------------------------------------------------------------------------------------------------


// 9.Write a function to determine if a given number is prime.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}
// console.log(isPrime(11)); // true

// -------------------------------------------------------------------------------------------------------------


// 10.write a function to reverse a string without using the built-in reverse() method.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseString("hello")); // "olleh"

// -------------------------------------------------------------------------------------------------------------

// 11.Count Vowels in a String: Write a function to count the number of vowels in a string.

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // Test cases
//   console.log(countVowels("Hello World")); // Output: 3
//   console.log(countVowels("Javascript is awesome!")); // Output: 6
//   console.log(countVowels("AEIOU")); // Output: 5
//   console.log(countVowels("abcdef")); // Output: 2
//   console.log(countVowels("123456")); // Output: 0

// -----------------------------------------------------------------------------

// 12.Merge Two Sorted Arrays: Write a function to merge two sorted arrays into a single sorted array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
  
    // Traverse both arrays and push the smaller element into the mergedArray
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
//   // Test cases
//   console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
//   console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
//   console.log(mergeSortedArrays([1, 2, 3], [0])); // Output: [0, 1, 2, 3]
//   console.log(mergeSortedArrays([], [1, 2, 3])); // Output: [1, 2, 3]
//   console.log(mergeSortedArrays([1, 2, 3], [])); // Output: [1, 2, 3]
  

// ---------------------------------------------------------------------------------


// Fibonacci Problems:

//13.Nth Fibonacci Number: Write a function to return the nth Fibonacci number
// Two Methods 

//  Recursive Method
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  
//   // Test cases
//   console.log(fibonacciRecursive(6)); // Output: 8
//   console.log(fibonacciRecursive(10)); // Output: 55

// Iterative Method

function fibonacciIterative(n) {
    let a = 0, b = 1, temp;
  
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
  
    return n ? b : a;
  }
  
//   // Test cases
//   console.log(fibonacciIterative(6)); // Output: 8
//   console.log(fibonacciIterative(10)); // Output: 55

//14.Fibonacci Series Up to N: Write a function to print the Fibonacci series up to the nth number.

function fibonacciSeries(n) {
    let series = [0, 1]; // Initialize the series with the first two Fibonacci numbers

    if (n <= 0) return [];
    if (n === 1) return [0];

    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

// // Test cases
// console.log(fibonacciSeries(6)); // Output: [0, 1, 1, 2, 3, 5]
// console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//15.Check if a Number is in the Fibonacci Sequence: Write a function to check if a given number is in the Fibonacci sequence.

function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

function isFibonacci(num) {
    if (num < 0) return false;
    
    // Check if 5*n^2 + 4 or 5*n^2 - 4 is a perfect square
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

// // Test cases
// console.log(isFibonacci(8));   // Output: true (8 is a Fibonacci number)
// console.log(isFibonacci(7));   // Output: false (7 is not a Fibonacci number)
// console.log(isFibonacci(13));  // Output: true (13 is a Fibonacci number)
// console.log(isFibonacci(21));  // Output: true (21 is a Fibonacci number)
// console.log(isFibonacci(22));  // Output: false (22 is not a Fibonacci number)

  
//16.Sum of First N Fibonacci Numbers: Write a function to calculate the sum of the first n Fibonacci numbers.
function sumFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, sum = a + b;  // Starting with 0 and 1

    for (let i = 2; i < n; i++) {
        let next = a + b;
        sum += next;
        a = b;
        b = next;
    }

    return sum;
}

// // Test cases
// console.log(sumFibonacci(1));  // Output: 1 (Sum of the first 1 Fibonacci number: 0)
// console.log(sumFibonacci(2));  // Output: 1 (Sum of the first 2 Fibonacci numbers: 0 + 1)
// console.log(sumFibonacci(3));  // Output: 2 (Sum of the first 3 Fibonacci numbers: 0 + 1 + 1)
// console.log(sumFibonacci(4));  // Output: 4 (Sum of the first 4 Fibonacci numbers: 0 + 1 + 1 + 2)
// console.log(sumFibonacci(5));  // Output: 7 (Sum of the first 5 Fibonacci numbers: 0 + 1 + 1 + 2 + 3)
// console.log(sumFibonacci(6));  // Output: 12 (Sum of the first 6 Fibonacci numbers: 0 + 1 + 1 + 2 + 3 + 5)


//17.Nth Fibonacci Number Using Dynamic Programming (Memoization): Write a function to find the nth Fibonacci number using dynamic programming.

function fibonacciDP(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibonacciDP(n - 1, memo) + fibonacciDP(n - 2, memo);
    return memo[n];
}

// // Test cases
// console.log(fibonacciDP(0));  // Output: 0
// console.log(fibonacciDP(1));  // Output: 1
// console.log(fibonacciDP(2));  // Output: 1
// console.log(fibonacciDP(3));  // Output: 2
// console.log(fibonacciDP(4));  // Output: 3
// console.log(fibonacciDP(5));  // Output: 5
// console.log(fibonacciDP(6));  // Output: 8
// console.log(fibonacciDP(7));  // Output: 13
// console.log(fibonacciDP(8));  // Output: 21

//18.Fibonacci Series Up to N Using Dynamic Programming: Write a function to return the Fibonacci series up to the nth number using dynamic programming.

function fibonacciSeriesDP(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fib = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib;
}

// // Test cases
// console.log(fibonacciSeriesDP(0));  // Output: []
// console.log(fibonacciSeriesDP(1));  // Output: [0]
// console.log(fibonacciSeriesDP(2));  // Output: [0, 1]
// console.log(fibonacciSeriesDP(3));  // Output: [0, 1, 1]
// console.log(fibonacciSeriesDP(4));  // Output: [0, 1, 1, 2]
// console.log(fibonacciSeriesDP(5));  // Output: [0, 1, 1, 2, 3]
// console.log(fibonacciSeriesDP(6));  // Output: [0, 1, 1, 2, 3, 5]
// console.log(fibonacciSeriesDP(7));  // Output: [0, 1, 1, 2, 3, 5, 8]

//19.Nth Fibonacci Number in O(log n) Time Using Matrix Exponentiation: Write a function to find the nth Fibonacci number in O(log n) time using matrix exponentiation.

function multiplyMatrices(a, b) {
    return [
        [
            a[0][0] * b[0][0] + a[0][1] * b[1][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1]
        ],
        [
            a[1][0] * b[0][0] + a[1][1] * b[1][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1]
        ]
    ];
}

function matrixPower(matrix, n) {
    if (n === 1) return matrix;
    if (n % 2 === 0) {
        const halfPower = matrixPower(matrix, n / 2);
        return multiplyMatrices(halfPower, halfPower);
    } else {
        return multiplyMatrices(matrix, matrixPower(matrix, n - 1));
    }
}

function fibonacciLogN(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const F = [
        [1, 1],
        [1, 0]
    ];

    const resultMatrix = matrixPower(F, n - 1);

    return resultMatrix[0][0];
}

// // Test cases
// console.log(fibonacciLogN(0)); // 0
// console.log(fibonacciLogN(1)); // 1
// console.log(fibonacciLogN(2)); // 1
// console.log(fibonacciLogN(3)); // 2
// console.log(fibonacciLogN(4)); // 3
// console.log(fibonacciLogN(5)); // 5
// console.log(fibonacciLogN(6)); // 8
// console.log(fibonacciLogN(7)); // 13

// Advanced Problems:

// 20.Two Sum Problem: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

function twoSum(nums, target) {
    const numToIndex = new Map(); // Hash map to store number and its index

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numToIndex.has(complement)) {
            // If complement is found, return the indices
            return [numToIndex.get(complement), i];
        }

        // Store the number and its index in the hash map
        numToIndex.set(num, i);
    }

    // If no solution is found, return an empty array or handle it as needed
    return [];
}

// // Test cases
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] - nums[0] + nums[1] = 9
// console.log(twoSum([3, 2, 4], 6)); // [1, 2] - nums[1] + nums[2] = 6
// console.log(twoSum([3, 3], 6)); // [0, 1] - nums[0] + nums[1] = 6


// 21.Maximum Subarray Sum (Kadane’s Algorithm): Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

function maxSubArraySum(nums) {
    if (nums.length === 0) return 0; // Handle edge case if the array is empty

    let maxCurrent = nums[0]; // Initialize with the first element
    let maxGlobal = nums[0];  // Initialize with the first element

    for (let i = 1; i < nums.length; i++) {
        // Update maxCurrent to be either the current element or the current element + maxCurrent
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        // Update maxGlobal if maxCurrent is greater
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }

    return maxGlobal;
}

// // Test cases
// console.log(maxSubArraySum([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 10
// console.log(maxSubArraySum([-1, -2, -3, -4])); // Output: -1
// console.log(maxSubArraySum([5, 4, -1, 7, 8])); // Output: 23

// 22.Find Duplicate Number: Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, return the duplicate number.

function findDuplicate(nums) {
    // Phase 1: Find intersection point
    let slow = nums[0];
    let fast = nums[0];
    
    // Move slow by 1 step and fast by 2 steps until they meet
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Phase 2: Find the entrance to the cycle
    let finder = nums[0];
    
    while (finder !== slow) {
        finder = nums[finder];
        slow = nums[slow];
    }
    
    return finder;
}

// // Test cases
// console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
// console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
// console.log(findDuplicate([1, 1])); // Output: 1


// 23.Longest Substring Without Repeating Characters: Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        // If character is in the map and its index is within the current window
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1; // Move the start to avoid duplicate
        }

        charIndexMap.set(char, end); // Update the index of the current character
        maxLength = Math.max(maxLength, end - start + 1); // Calculate the max length
    }

    return maxLength;
}

// // Test cases
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
// console.log(lengthOfLongestSubstring(""));         // Output: 0 (empty string)


// 24.Valid Parentheses: Given a string s containing just the characters (, ), {, }, [, and ], determine if the input string is valid.

function isValid(s) {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (mapping[char]) {
            // If the character is an opening parenthesis, push it onto the stack
            stack.push(char);
        } else {
            // If the character is a closing parenthesis
            const topElement = stack.pop(); // Pop the top element from the stack
            if (char !== mapping[topElement]) {
                // Check if the popped element matches the current closing parenthesis
                return false;
            }
        }
    }

    // If the stack is empty, all opening parentheses were matched
    return stack.length === 0;
}

// // Test cases
// console.log(isValid("()"));        // Output: true
// console.log(isValid("()[]{}"));    // Output: true
// console.log(isValid("(]"));        // Output: false
// console.log(isValid("([)]"));      // Output: false
// console.log(isValid("{[]}"));      // Output: true
// console.log(isValid(""));          // Output: true (empty string)


// 25.Longest Palindromic Substring: Given a string s, return the longest palindromic substring in s.
function longestPalindrome(s) {
    if (s.length === 0) return "";

    let start = 0;
    let end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindromes
        let [l1, r1] = expandAroundCenter(i, i);
        // Even-length palindromes
        let [l2, r2] = expandAroundCenter(i, i + 1);

        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return s.substring(start, end + 1);
}

// // Test cases
// console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
// console.log(longestPalindrome("cbbd"));  // Output: "bb"
// console.log(longestPalindrome("a"));     // Output: "a"
// console.log(longestPalindrome("ac"));    // Output: "a" or "c"

// 26.Group Anagrams: Given an array of strings strs, group the anagrams together.

function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the characters in the string to create a key
        const sortedStr = str.split('').sort().join('');
        
        // If the key does not exist in the map, create a new entry
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the current string to the corresponding anagram group
        map.get(sortedStr).push(str);
    }

    // Convert map values to an array of arrays
    return Array.from(map.values());
}

// // Test cases
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

// console.log(groupAnagrams([""]))       // Output: [ [ '' ] ]
// console.log(groupAnagrams(["a"]))      // Output: [ [ 'a' ] ]
// console.log(groupAnagrams(["abc", "bca", "cab", "bac", "cba"]));
// // Output: [ [ 'abc', 'bca', 'cab', 'bac', 'cba' ] ]


// 27.Longest Common Prefix: Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Take the first string as the initial prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Compare the prefix with the current string
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// // Test cases
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// // Output: "fl"

// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// // Output: ""

// console.log(longestCommonPrefix(["interstellar", "interstate", "internet"]));
// // Output: "inter"

// console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
// Output: "interst"

// 28.Rotate Array: "Given an array of integers and a non-negative integer k, how would you rotate the array to the right by k steps?"

function rotate(nums, k) {
    const n = nums.length;
    k = k % n;  // In case k is greater than n

    // Helper function to reverse elements from start to end index
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(0, n - 1);

    // Reverse the first k elements
    reverse(0, k - 1);

    // Reverse the remaining n - k elements
    reverse(k, n - 1);
}

// Test cases
const arr1 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr1, 3);
console.log(arr1); // Output: [5, 6, 7, 1, 2, 3, 4]

const arr2 = [-1, -100, 3, 99];
rotate(arr2, 2);
console.log(arr2); // Output: [3, 99, -1, -100]

const arr3 = [1, 2, 3, 4, 5];
rotate(arr3, 5);
console.log(arr3); // Output: [1, 2, 3, 4, 5] (Same as original since k = n)


// 29.Intersection of Two Arrays: "You have two arrays of integers. Can you write a function to compute their intersection? The result should include only the elements that are present in both arrays."


function intersect(nums1, nums2) {
    const set1 = new Set(nums1);
    const resultSet = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }

    return Array.from(resultSet);
}

// // Test cases
// const arr1 = [1, 2, 2, 1];
// const arr2 = [2, 2];
// console.log(intersect(arr1, arr2)); // Output: [2]

// const arr3 = [4, 9, 5];
// const arr4 = [9, 4, 9, 8, 4];
// console.log(intersect(arr3, arr4)); // Output: [9, 4]

// 30.Find the First Non-Repeating Character in a String: "Write a function to find the first non-repeating character in a given string.
//  If all characters are repeating, return -1. How would you approach this problem?"

function firstNonRepeatingCharacter(s) {
    const charCount = {};
    
    // First pass: Count the frequency of each character
    for (const char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Second pass: Find the first non-repeating character
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return -1; // Return -1 if no unique character is found
}

// // Test cases
// console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
// console.log(firstNonRepeatingCharacter("hello")); // Output: "h"
// console.log(firstNonRepeatingCharacter("aabb")); // Output: -1


// 31.Climbing Stairs (Dynamic Programming): "Imagine you are climbing a staircase with n steps. 
// You can climb either 1 step or 2 steps at a time. How many distinct ways can you reach the top of the staircase?



function climbStairs(n) {
    if (n <= 1) return 1;

    // Create an array to store the number of ways to reach each step
    const dp = new Array(n + 1);

    // Base cases
    dp[0] = 1; // 1 way to stay at the ground (step 0)
    dp[1] = 1; // 1 way to reach the first step

    // Fill the dp array using the recursive relation
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // The number of ways to reach the nth step
    return dp[n];
}

// // Test cases
// console.log(climbStairs(2)); // Output: 2
// console.log(climbStairs(3)); // Output: 3
// console.log(climbStairs(5)); // Output: 8


// 32.Remove N-th Node From End of List (Linked List Problem): "Given the head of a linked list and an integer n,
//  how would you remove the n-th node from the end of the list and return the head of the updated list?"

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function removeNthFromEnd(head, n) {
    // Create a dummy node that points to the head of the list
    const dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize two pointers
    let first = dummy;
    let second = dummy;
    
    // Move the first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the nth node from the end
    second.next = second.next.next;
    
    // Return the head of the updated list
    return dummy.next;
}

// Helper function to print the list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// // Test case
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const n = 2;
// const updatedHead = removeNthFromEnd(head, n);
// printList(updatedHead); // Output: 1 -> 2 -> 3 -> 5


// 33.Binary Search: "Implement a binary search algorithm. 
// You have a sorted array of integers and a target value. How would you efficiently find the target value's index in the array?"

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// // Test case
// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 7;
// const index = binarySearch(sortedArray, target);

// console.log(index); // Output: 6 (since the target 7 is at index 6)

// 34.Linked List Cycle Detection: "How would you determine if a linked list has a cycle in it? Can you provide an efficient solution for this problem?"

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;           // Move slow pointer by 1 step
        fast = fast.next.next;     // Move fast pointer by 2 steps

        if (slow === fast) {
            return true;           // Cycle detected
        }
    }

    return false;                  // No cycle detected
}

// // Test case
// const node3 = new ListNode(3);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);
// node3.next = node1; // Creating a cycle

// console.log(hasCycle(node1)); // Output: true (cycle exists)

// 35.Merge Intervals: "You are given a collection of intervals where each interval is represented as a pair of integers. 
// Write a function to merge all overlapping intervals and return the result."

function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals based on the starting point
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        // Check if the current interval overlaps with the next interval
        if (currentInterval[1] >= nextInterval[0]) {
            // Merge the intervals by updating the end point
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            // No overlap, push the current interval and update to the next interval
            merged.push(currentInterval);
            currentInterval = nextInterval;
        }
    }

    // Push the last interval
    merged.push(currentInterval);

    return merged;
}

// Test case
// const intervals = [
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18]
// ];

// console.log(mergeIntervals(intervals));
// // Output: [[1, 6], [8, 10], [15, 18]]


// 36.Product of Array Except Self: "Given an array of integers, write a function that returns an array where each element at 
// index i is the product of all the numbers in the original array except nums[i]. How would you solve this without using division?"

function productExceptSelf(nums) {
    const n = nums.length;
    
    // Initialize arrays
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const result = new Array(n);
    
    // Fill leftProducts
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    
    // Fill rightProducts
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }
    
    // Compute the result
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }
    
    return result;
}

// // Test case
// const nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums)); 
// // Output: [24, 12, 8, 6]

// 37.Find Minimum in Rotated Sorted Array: "Suppose you have a 
// sorted array that has been rotated at some pivot point. Write a function to find the minimum element in the rotated array."

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            // The minimum is in the right part
            left = mid + 1;
        } else {
            // The minimum is in the left part or at mid
            right = mid;
        }
    }
    
    // left and right will converge to the minimum element
    return nums[left];
}

// // Test case
// const nums = [4, 5, 6, 7, 0, 1, 2];
// console.log(findMin(nums)); 
// // Output: 0

