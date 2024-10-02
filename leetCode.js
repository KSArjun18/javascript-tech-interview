// GIven a array of numbers,arrang them in a way that it forms the largest CSSFontFeatureValuesRule

// input-[54,546,548,60]

function largestNumber(arr) {
    // Convert numbers to strings for concatenation comparison
    const strArr = arr.map(String);
    
    // Sort the array based on the custom comparator
    strArr.sort((a, b) => (b + a) - (a + b));
    
    // Join the sorted array into a single string
    const result = strArr.join('');
    
    // Handle the case where the result is leading with zeros
    return result[0] === '0' ? '0' : result;
}

// Example usage:
const numbers = [54, 546, 548, 60];
const largestValue = largestNumber(numbers);
console.log(largestValue); // Output: 6054854654



// Given a number N print reverse of number N
// Do not print leading zeros in output


function reverseNumber(N) {
    // Convert the number to a string, reverse it, and convert it back to a number
    const reversed = Number(N.toString().split('').reverse().join(''));
    return reversed;
}

// Example usage:
const N1 = 1200;
const result6 = reverseNumber(N1);
console.log(result6); // Output: 21

// 1. Given an array of integers nums and an integer target,
//  return the indices of the two numbers such that they add up to the target.

function twoSum(nums, target) {
    const map = new Map(); // Create a map to store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement

        if (map.has(complement)) {
            // If the complement exists in the map, return the indices
            return [map.get(complement), i];
        }

        // Otherwise, add the current number and its index to the map
        map.set(nums[i], i);
    }

    return []; // If no solution is found, return an empty array (this can be handled differently if needed)
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]


// 2.You are given an array where the ith element is the price of a given stock on day i.
//  You need to find the maximum profit you can achieve by buying on one day and selling on another day

function maxProfit(prices) {
    let minPrice = Infinity; // Set an initial very high price
    let maxProfit = 0;       // Initialize max profit as 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // Update the minPrice if we find a lower price
            minPrice = prices[i];
        } else {
            // Calculate profit if sold on day i and update maxProfit if it's higher
            const profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit; // Return the maximum profit found
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (buy on day 2 and sell on day 5)


// 3.Given an array of integers, determine if there are duplicates in the array.

function containsDuplicate(nums) {
    const numSet = new Set(nums);  // Convert array to Set
    
    // If the size of the set is smaller than the length of the array, there are duplicates
    return numSet.size !== nums.length;
}

// Example usage:
const nums1 = [1, 2, 3, 4, 1];
console.log(containsDuplicate(nums1)); // Output: true (because 1 appears twice)

// 4. Given an array nums, return
//  an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    
    // Left pass: Calculate the running product of elements to the left of each index
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Right pass: Calculate the running product of elements to the right of each index
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return output;
}

// Example usage:
const nums2 = [1, 2, 3, 4];
console.log(productExceptSelf(nums2)); // Output: [24, 12, 8, 6]


// 5.Find the contiguous subarray within an array that has the largest sum.

function maxSubArray(nums) {
    let maxSoFar = nums[0];   // Initialize with the first element
    let currentMax = nums[0]; // Initialize current subarray sum

    for (let i = 1; i < nums.length; i++) {
        // Either add the current element to the existing subarray or start a new subarray
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        // Update the maximum sum encountered so far
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
}

// Example usage:
const nums3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums3)); // Output: 6 (subarray [4, -1, 2, 1])


// 6. Given an array, move 
// all the zeroes to the end while maintaining the relative order of the non-zero elements.


function moveZeroes(nums) {
    let insertionPos = 0; // Tracks where the next non-zero element should go

    // First pass: Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertionPos] = nums[i];
            insertionPos++;
        }
    }

    // Second pass: Fill the rest of the array with zeroes
    for (let i = insertionPos; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Example usage:
let nums4 = [0, 1, 0, 3, 12];
moveZeroes(nums4);
console.log(nums4); // Output: [1, 3, 12, 0, 0]

// 7.Given an array of integers where each element 
// is between 1 and n (inclusive), find the duplicate number in the array.

function findDuplicate(nums) {
    // Phase 1: Detect the cycle
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];     // Move slow pointer by 1 step
        fast = nums[nums[fast]]; // Move fast pointer by 2 steps
    } while (slow !== fast);

    // Phase 2: Find the entrance to the cycle
    slow = nums[0]; // Reset slow to the start of the array
    while (slow !== fast) {
        slow = nums[slow];     // Move both pointers by 1 step
        fast = nums[fast];
    }

    return slow; // Both pointers meet at the duplicate number
}

// Example usage:
const nums5 = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums5)); // Output: 2


// 8. Given an array of integers, find all the elements that appear twice in it.

function findDuplicates(nums) {
    const counts = {};
    const duplicates = [];

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1; // Count occurrences of each number
    }

    for (const num in counts) {
        if (counts[num] === 2) {
            duplicates.push(Number(num)); // Add to duplicates if it appears twice
        }
    }

    return duplicates;
}

// Example usage:
const arr = [4, 3, 2, 7, 8, 3, 2, 1];
const result = findDuplicates(arr);
console.log(result); // Output: [3, 2]


// 9. Find the majority element in an array, i.e., the element that appears more than ⌊n / 2⌋ times.

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    // Step 1: Find the candidate for majority element
    for (const num of nums) {
        if (count === 0) {
            candidate = num; // Set candidate when count is 0
        }
        count += (num === candidate) ? 1 : -1; // Increment or decrement the count
    }

    // Step 2: (Optional) Verify the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > Math.floor(nums.length / 2) ? candidate : null; // Check if candidate is actually the majority
}

// Example usage:
const arr1 = [3, 2, 3];
const result1 = majorityElement(arr1);
console.log(result1); // Output: 3

// 10.Find all triplets in an array that sum up to zero.

function threeSum(nums) {
    const triplets = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first number
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values for the second number
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // Skip duplicate values for the third number
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Need a larger sum
            } else {
                right--; // Need a smaller sum
            }
        }
    }

    return triplets;
}

// Example usage:
const arr2 = [-1, 0, 1, 2, -1, -4];
const result2 = threeSum(arr2);
console.log(result2); // Output: [[-1, -1, 2], [-1, 0, 1]]


// 11.Distribute Chocolate Packets
// You are given an array of integers where each value represents the number of chocolates in a packet. You have m students, and your goal is to distribute the chocolate packets among them such that the difference between the maximum number of chocolates received by a student and the minimum number of chocolates received by a student is minimized.

// Write a function findMinDiff that takes in the following parameters:

// arr: an array of integers representing the number of chocolates in each packet.
// n: the number of packets.
// m: the number of students.

function findMinDiff(arr, n, m) {
    // If there are no students or no chocolates
    if (m == 0 || n == 0) return 0;

    // Sort the array
    arr.sort((a, b) => a - b);

    // If there are fewer packets than students
    if (n < m) return -1;

    // Initialize minimum difference
    let minDiff = Infinity;

    // Find the subarray of size m such that the difference
    // between the maximum and minimum is minimized
    for (let i = 0; i + m - 1 < n; i++) {
        let diff = arr[i + m - 1] - arr[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}

// Example usage:
const chocolates = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
const students = 7;
const N = chocolates.length;
const result4 = findMinDiff(chocolates, N, students);
console.log("Minimum difference is", result4); // Output: Minimum difference is 10


// 12.Word Guessing Game
// You are tasked with creating a simple word guessing game. The game will randomly
//  select a word from a given list of words, and the user will have to guess the selected word.

function wordGuessGame(words, guess) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    return guess === selectedWord ? "Correct Guess!" : `Wrong! The word was ${selectedWord}`;
}

// Example usage:
const words = ["apple", "banana", "grape", "orange"];
console.log(wordGuessGame(words, "apple")); // Output: "Correct Guess!" or "Wrong! The word was <selectedWord>"


// 13. Best Time to Buy and Sell Stock
// You are given an array of integers where each 
// element represents the price of a stock on a given day. You want to maximize
//  your profit by choosing a single day to buy the stock and a different day in the future to sell it.

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update minPrice to be the lowest price encountered so far
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate potential profit and update maxProfit
            const profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

// 14.Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (sequence is 1, 2, 3, 4)


// 15.Given an array of integers, return the pair of adjacent elements that have the largest product.


function adjacentElementsProduct(arr) {
    let maxProduct = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
        maxProduct = Math.max(maxProduct, arr[i] * arr[i + 1]);
    }

    return maxProduct;
}

// Example usage:
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // Output: 21 (7 * 3)


// 16.Given an array of integers, find the sum of all elements.

function arraySum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log(arraySum([1, 2, 3, 4])); // Output: 10


// 17.Find indices of two numbers such that they add up to a specific target.

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// 18. Print numbers from 1 to N. For multiples of 3,
//  print "Fizz"; for multiples of 5, print "Buzz"; and for multiples of both 3 and 5, print "FizzBuzz."

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
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

// Example usage:
fizzBuzz(15);
// Output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz


// 19.Given a sorted array, remove the duplicates in-place and return the length of the modified array.

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// Example usage:
const arr3 = [1, 1, 2];
console.log(removeDuplicates(arr3)); // Output: 2, arr becomes [1, 2, _]

// 20.Find the largest sum of a contiguous subarray.

function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6


// 21.Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) {
            stack.push(map[char]);
        } else if (char !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(isValid("(){}[]")); // Output: true
console.log(isValid("(]")); // Output: false












