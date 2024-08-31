

// 1. Write a function to check if a given string is a palindrome.
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



// ----------------------------------------------------------------------------------------------------------------

// 2. Write a function to find the largest and smallest numbers in an array of numbers.

function findLargestAndSmallest(arr) {
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    return { largest, smallest };
}
// console.log(findLargestAndSmallest([3, 5, 7, 2, 8])); // { largest: 8, smallest: 2 }


// Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// -------------------------------------------------------------------------------------------------------------


// Write a function to find the missing number in an array of numbers from 1 to N.

function findMissingNumber(arr, n) {
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((a, b) => a + b, 0);
    return totalSum - arraySum;
}

// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
// -------------------------------------------------------------------------------------------------------------


// Write a function to find the longest word in a sentence.

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


// Write a function to find the most commonly used character in a string.

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


// Write a function to determine if two strings are anagrams of each other.


function areAnagrams(str1, str2) {
    const sortedStr1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}


// console.log(areAnagrams("listen", "silent")); // true
// -------------------------------------------------------------------------------------------------------------


// Write a function to find the factorial of a given number.

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}
// console.log(factorial(5)); // 120
// -------------------------------------------------------------------------------------------------------------


// Write a function to determine if a given number is prime.

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

// write a function to reverse a string without using the built-in reverse() method.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseString("hello")); // "olleh"

// -------------------------------------------------------------------------------------------------------------


// Write a function that prints the numbers from 1 to 100.
//  But for multiples of three, print "Fizz" instead of the number,
//   and for the multiples of five, print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz"

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

// -------------------------------------------------------------------------------------------------------------


// Write a function to reverse a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}


// console.log(reverseString("hello")); // "olleh"

// -------------------------------------------------------------------------------------------------------------


// Write a function to find the maximum number in an array.

function findMax(arr) {
    return Math.max(...arr);
}


// console.log(findMax([1, 2, 3, 4, 5])); // 5

// -------------------------------------------------------------------------------------------------------------


// Write a function to check if a given string is a palindrome.

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// console.log(isPalindrome("madam")); // true

// -------------------------------------------------------------------------------------------------------------
// Write a function to check if an array is sorted in ascending order.

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isSorted([1, 2, 3, 4, 5])); // true
// -------------------------------------------------------------------------------------------------------------


// Write a function to return the sum of all elements in an array.

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// -------------------------------------------------------------------------------------------------------------

// Write a function to find the factorial of a given number.

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


// console.log(factorial(5)); // 120

// -------------------------------------------------------------------------------------------------------------


// Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// -------------------------------------------------------------------------------------------------------------



// Write a function to count the number of vowels in a string.

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
// console.log(countVowels("hello")); // 2

// -------------------------------------------------------------------------------------------------------------


// Write a function to merge two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]



// -------------------------------------------------------------------------------------------------------------


// Write a function to return the nth Fibonacci number

function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}


// console.log(fibonacciRecursive(6)); // 8


function fibonacciIterative(n) {
    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return n ? b : a;
}


// console.log(fibonacciIterative(6)); // 8


// -------------------------------------------------------------------------------------------------------------


// Write a function to print the Fibonacci series up to the nth number.


function fibonacciSeries(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
}
// console.log(fibonacciSeries(6)); // [0, 1, 1, 2, 3, 5]


// -------------------------------------------------------------------------------------------------------------
// Write a function to check if a given number is in the Fibonacci sequence.

function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b === num || num === 0;
}

console.log(isFibonacci(8)); // true
console.log(isFibonacci(7)); // false
// -------------------------------------------------------------------------------------------------------------


// Write a function to calculate the sum of the first n Fibonacci numbers.

function sumFibonacci(n) {
    let a = 0, b = 1, sum = a + b;

    for (let i = 3; i <= n; i++) {
        let next = a + b;
        sum += next;
        a = b;
        b = next;
    }

    return sum;
}


// console.log(sumFibonacci(6)); // 20 (0 + 1 + 1 + 2 + 3 + 5 + 8)

// -------------------------------------------------------------------------------------------------------------
// Write a function to find the nth Fibonacci number using dynamic programming (memoization).

function fibonacciDP(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibonacciDP(n - 1, memo) + fibonacciDP(n - 2, memo);
    return memo[n];
}
// console.log(fibonacciDP(6)); // 8

// -------------------------------------------------------------------------------------------------------------

// : Write a function to return the Fibonacci series up to the nth number using dynamic programming.

function fibonacciSeriesDP(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}
// console.log(fibonacciSeriesDP(6)); // [0, 1, 1, 2, 3, 5]

// -------------------------------------------------------------------------------------------------------------


// Write a function to find the nth Fibonacci number in O(log n) time using matrix exponentiation (advanced problem)

function multiplyMatrices(a, b) {
    return [
        [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
        [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
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
    const resultMatrix = matrixPower([[1, 1], [1, 0]], n - 1);
    return resultMatrix[0][0];
}

// console.log(fibonacciLogN(6)); // 8

// -------------------------------------------------------------------------------------------------------------


// Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target.


function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}


// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// -------------------------------------------------------------------------------------------------------------


// Given an integer array nums, find the contiguous
//  subarray (containing at least one number) which has the largest sum and return its sum

function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6

// -------------------------------------------------------------------------------------------------------------

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//  You want to maximize your profit by choosing a single day to buy one stock and choosing 
// a different day in the future to sell that stock. Return the maximum profit you can achieve.


function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}

// console.log(maxProfit([7,1,5,3,6,4])); // 5

// -------------------------------------------------------------------------------------------------------------


// Given an integer array nums, return an array answer such that
//  answer[i] is equal to the product of all the elements of nums except nums[i].



function productExceptSelf(nums) {
    const n = nums.length;
    let left = Array(n).fill(1);
    let right = Array(n).fill(1);
    let answer = Array(n);

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
}

// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]

// -------------------------------------------------------------------------------------------------------------


// Given an array of integers nums containing n + 1 integers
//  where each integer is in the range [1, n] inclusive, return the duplicate number.

function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    fast = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}
// console.log(findDuplicate([1,3,4,2,2])); // 2


// -------------------------------------------------------------------------------------------------------------


// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3

// -------------------------------------------------------------------------------------------------------------


// Given a string s containing just the characters 
// (, ), {, }, [ and ], determine if the input string is valid.

function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in map) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// console.log(isValid("()[]{}")); // true

// -------------------------------------------------------------------------------------------------------------


// Given a string s, return the longest palindromic substring in "s"

function longestPalindrome(s) {
    if (s.length < 2) return s;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (maxLength < right - left - 1) {
            start = left + 1;
            maxLength = right - left - 1;
        }
    }

    for (let i = 0; i < s.length - 1; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }

    return s.slice(start, start + maxLength);
}

// console.log(longestPalindrome("babad")); // "bab" or "aba"


// -------------------------------------------------------------------------------------------------------------
// : Given an array of strings strs, group the anagrams together.

function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// -------------------------------------------------------------------------------------------------------------

// Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
    }

    return prefix;
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

// -------------------------------------------------------------------------------------------------------------


















