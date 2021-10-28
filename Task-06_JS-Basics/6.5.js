function func(str) {
  let arr = str.toLowerCase().split('');
  let arrCheck = [];

  for (let i = 0; i < arr.length; i++) {
    if (arrCheck.includes(arr[i])){
        return false;
    }
    arrCheck.push(arr[i]);
  }

  return true;
};

let str1 = "Dermatoglyphics";
let str2 = "aba";
let str3 = "moOse";
let str4 = "";
alert(func(str4));