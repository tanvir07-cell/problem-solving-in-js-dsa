//problem1 :  frequency counter:

// time complexity: O(n*2)
// space complexity: O(1)
// function isSame(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let index = arr2.indexOf(arr1[i]);

//     if (index === -1) {
//       return false;
//     }
//     arr2.splice(index, 1);
//     if (arr2.length === 0) return true;
//   }
// }
// console.log(isSame([1, 2, 3], [1, 2, 3]));

// problem 1 for better time complexity:

// time complexity:O(n+n+n)===O(n);
// space complexity:O(n+m)/O(n)
function isSame(arr1, arr2) {
  let hashMap1 = {};
  let hashMap2 = {};
  //   edge case:
  if (arr1.length !== arr2.length) return false;

  for (let num of arr1) {
    hashMap1[num] = hashMap1[num] + 1 || 1;
  }
  for (let num of arr2) {
    hashMap2[num] = hashMap2[num] + 1 || 1;
  }

  for (let key in hashMap2) {
    if (!key in hashMap1 || hashMap1[key] !== hashMap2[key]) return false;
  }
  return true;
}
// console.log(isSame([1, 2, 3], [1, 2, 3]));

// problem number 560 in leetcode:

// 560. Subarray Sum Equals K

// space complexity: O(n);
// time complexity: O(n);
function subArraySum(nums, k) {
  const hashMap = {
    0: 1,
  };
  let sum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if ([sum - k] in hashMap) {
      result++;
    }

    hashMap[sum] = hashMap[sum] + 1 || 1;
  }
  return result;
}

// console.log(subArraySum([1, 2, 3], 3));

// problem number 242. valid anagram in leetcode:

function isAnagram(s, t) {
  const hashMap1 = {};
  const hashMap2 = {};
  if (s.length !== t.length) return false;

  // remove all the spaces and not alphabets and convert to lowercase:
  s = s.replace(/[^\w]/g, "").toLowerCase();
  t = t.replace(/[^\w]/g, "").toLowerCase();

  for (let char of s) {
    hashMap1[char] = hashMap1[char] + 1 || 1;
  }

  for (let char of t) {
    hashMap2[char] = hashMap2[char] + 1 || 1;
  }

  for (let key in hashMap1) {
    if (!key in hashMap2 || hashMap1[key] !== hashMap2[key]) return false;
  }
  return true;
}
// console.log(isAnagram("care", "race"));

// problem number 9. Palindrome Number in leetcode:
function palindrome(x) {
  const hashMap = {};
  let isPalindrome = "";
  hashMap[x] = 1;

  for (let key in hashMap) {
    isPalindrome = key.split("").reverse().join("");
  }
  if (+isPalindrome !== x) return false;
  return true;
}

// console.log(palindrome(204));

//49. Group Anagrams leetcode:

function groupAnagrams(strs) {
  let hashMap = {};
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (sorted in hashMap) {
      hashMap[sorted].push(str);
    } else {
      hashMap[sorted] = [str];
    }
  }
  return Object.values(hashMap);
}
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Multiple pointers pattern problem:

// 1. sum zero:

function sumZero(arr) {
  // first makes the array to sorted:
  arr = arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    }
    if (sum < 0) {
      left++;
    }
  }
  return undefined;
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5]));

// console.log(sumZero([-1, -3, -2, 0, -2, 200, 4, 5, 1, -5]));

// console.log(sumZero([1, 2, 3]));

function areDuplicate(arr) {
  // edge case : first makes this array to the sorted:
  arr.sort((a, b) => a - b);

  let i = 0;
  let j = 1;

  while (i < arr.length && j < arr.length) {
    if (arr[i] === arr[j]) return true;

    i++;
    j++;
  }

  return false;
}

// console.log(areDuplicate([-1, 2, -5, -2, 0, 3, 4, 3, 2, -1]));
// console.log(areDuplicate([1, 2, 3, -5, 5]));

//125. Valid Palindrome:
function isPalindrome(s) {
  const normalizeStr = s.replace(/[\W_]/g, "").toLowerCase();

  // let left = 0;
  // let right = normalizeStr.length - 1;

  // while (left < right) {
  //   if (normalizeStr[left] !== normalizeStr[right]) return false;
  //   left++;
  //   right--;
  // }
  // return true;

  for (let i = 0; i < normalizeStr.length; i++) {
    if (normalizeStr[i] !== normalizeStr[normalizeStr.length - 1 - i])
      return false;
  }
  return true;
}

// console.log(isPalindrome("race a car"));

// sliding window pattern problem:

function maxSubArraySum(arr, num) {
  let MAX = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum = sum + arr[i + j];
      console.log(arr[i], arr[i + j]);
    }
    MAX = Math.max(MAX, sum);
  }
  return MAX;
}

// console.log(maxSubArraySum([1, 2, 3, 4, 5, 6], 2));

// explanation of maxSubArraySum problem:
// kon 2 ta consecutive(por por)number jog korle maximum sum pawa jabe:
// 1+2 = 3
// 2+3 = 5;
// 3+4 = 7
// 4+5 = 9(return 9 because this is the maximum sum of 2 consecutive number)

// best approach to solve this maxSubArraySum problem using sliding window pattern:

function maxSubArraySum(arr, num) {
  let sum = 0;
  let MAX = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  // then assume that this sum is the maximum sum:
  MAX = sum;

  for (let i = num; i < arr.length; i++) {
    sum = sum - arr[i - num] + arr[i];
    MAX = Math.max(MAX, sum);
  }
  return MAX;
}

console.log(maxSubArraySum([1, 3, 5, 2, 8, 1, 10], 2));
