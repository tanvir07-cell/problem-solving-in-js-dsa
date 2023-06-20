// 1st problem:

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

console.log(getCountStr("Rifat rt/,#"));
