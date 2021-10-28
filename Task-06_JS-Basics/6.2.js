function foo(str) {
  let res = [];
  str.split('').forEach(element => {
    res.push(0 + parseInt(element.charCodeAt(0)).toString(2));
  });

  return res;
};

let str = 'Yosemite';
alert(foo(str));