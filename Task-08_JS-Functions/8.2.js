function func(n, k){
  let arr = [];
  while (n != 0)
    arr.push(n--)

  arr.reverse();
  
  let pos = k - 1;
  while (arr.length != 1)
  {
    while (pos >= arr.length)
      pos -= arr.length

    arr.splice(pos, 1);
    pos += k - 1;   
  }

  return arr;
};

alert(func(7, 3));
alert(func(11, 19));
alert(func(1, 300));
alert(func(14, 2));
alert(func(100, 1));