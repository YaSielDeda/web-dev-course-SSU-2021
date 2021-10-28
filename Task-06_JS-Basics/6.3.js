function func(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split('').filter(letter => vowels.includes(letter)).length;
}

let str1 = 'o a kak ushakov lil vo kashu kakao';
let str2 = 'abracadabra';
let str3 = 'ABRACADABRA';
alert(func(str1));