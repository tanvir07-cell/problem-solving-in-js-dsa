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
// console.log(isElementExist(["a", "b", "c"], ["e", 2, "c", "1", "b"]));

// problem 3 : fizzbuzz

// time complexity: O(n)
// space complexity: O(1)
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "fizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i, "fizz");
    } else if (i % 5 === 0) {
      console.log(i, "buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz(100);

// problem 4:
// sum of the array:

function sumOfArray(arr) {
  // flag variable that holds each iteration sum:
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum;
}
// console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

// problem 5:
// find max and min from the array then interval it:

// space complexity:O(1)
// time complexity: O(n)
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
  }
  return `Interval is : ${max - min}`;
}

// problem 6:
// reverse the string:
// time complexity: O(n);
// space complexity : O(1);
function reverseStr(str) {
  let reverse = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverse += str[i];
  // }

  // another way:
  for (let char of str) {
    reverse = char + reverse;
  }

  // another way:
  // const newStr = str.split("").reverse().join("")
  // console.log(newStr);

  return reverse;
}

// console.log(reverseStr("Hello"));

function reverseNumber(num) {
  let strNum = num.toString();
  let reverse = "";

  for (let i = strNum.length - 1; i >= 0; i--) {
    if (strNum[i] === "-") {
      reverse = "-" + reverse;
      break;
    }

    reverse += strNum[i];
  }

  // parseInt kore dile ager 0 gula remove hoye jabe:
  // ar eikhane 10 means hocceh decimal number er jonno dielo hoy nah dileo hoy
  return parseInt(reverse, 10);
}
console.log(reverseNumber(-1200000));
