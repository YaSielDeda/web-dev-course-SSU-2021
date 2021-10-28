function func(str) {
  let res = '';
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
      res += str[i].toUpperCase() + str[i].repeat(i) + '-';
  }

  return res.slice(0, res.length - 1);
}

let str1 = "RqaEzty";
let str2 = "cwAt";
let str3 = "abcd";
alert(func(str3));