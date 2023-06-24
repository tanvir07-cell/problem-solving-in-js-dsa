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
console.log(isSame([1, 2, 3], [1, 2, 3]));
