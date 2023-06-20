// 1st problem:

// time complexity: O(n);
// space complexity: O(n);(because we creating a obj with respect to array)
function getCountStr(inputStr) {
  const obj = {};
  // convert str to lowerCase:
  const str = inputStr.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const newStr = str[i];
    if (newStr.charCodeAt(0) >= 32 && newStr.charCodeAt(0) <= 47) continue;

    // using ternery:
    newStr in obj ? (obj[newStr] += 1) : (obj[newStr] = 1);

    // if (newStr in obj) {
    //   obj[newStr] += 1;
    // } else obj[newStr] = 1;
  }
  return obj;
}

// console.log(getCountStr("Rifat rt/,#"));

// 2nd problem:

function isElementExist(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    obj[element] = true;
  }

  for (let elm of arr2) {
    if (obj[elm]) {
      return true;
    }
  }
}
console.log(isElementExist(["a", "b", "c"], ["e", 2, "c", "1", "b"]));
