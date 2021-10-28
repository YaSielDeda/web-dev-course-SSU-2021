function foo(arr) {
  let res = [];
  arr.forEach(arrIntoArr => {
    arrIntoArr.forEach(element => {
        res.push(element);
    });
  });
  return res.sort();
};

let arr = [[1, 3, 5], [-100], [2, 4, 6]] ;
alert(foo(arr));