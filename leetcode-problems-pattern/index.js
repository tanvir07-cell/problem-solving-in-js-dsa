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

console.log(palindrome(204));
