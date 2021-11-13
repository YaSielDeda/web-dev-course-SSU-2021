function zero(operation = "") {
    if (operation == "")
      return 0;
    else
      return Math.floor(eval(0 + operation));
};
function one(operation = "") {
    if (operation == "")
      return 1;
    else
      return Math.floor(eval(1 + operation));
};
function two(operation = "") {
    if (operation == "")
      return 2;
    else
      return Math.floor(eval(2 + operation));
};
function three(operation = "") {
    if (operation == "")
      return 3;
    else
      return Math.floor(eval(3 + operation));
};
function four(operation = "") {
    if (operation == "")
      return 4;
    else
      return Math.floor(eval(4 + operation));
};
function five(operation = "") {
    if (operation == "")
      return 5;
    else
      return Math.floor(eval(5 + operation));
};
function six(operation = "") {
    if (operation == "")
        return 6;
    else
        return Math.floor(eval(6 + operation));
};
function seven(operation = "") {
    if (operation == "")
      return 7;
    else
      return Math.floor(eval(7 + operation));
};
function eight(operation = "") {
    if (operation == "")
      return 8;
    else
      return Math.floor(eval(8 + operation));
};
function nine(operation= "") {
    if (operation == "")
      return 9;
    else
      return Math.floor(eval(9 + operation));
};
function plus(operand= "") {
  return "+" + operand;
};
function minus(operand = "") {
  return "-" + operand;
};
function times(operand = "") {
  return "*" + operand;
};
function dividedBy(operand = "") {
  return "/" + operand;
};

alert(seven(times(five()))); // 35
alert(four(plus(nine()))); // 13
alert(eight(minus(three()))); // 5
alert(six(dividedBy(two()))); // 3
alert(eight(dividedBy(three()))); // 2, а не 2.666666(6)
alert(three(times(three(times(three()))))); // 27
alert(two(plus(two(times(two(minus(one()))))))); // 4
alert(zero(plus(one(dividedBy(one()))))); // 1
alert(one(dividedBy(zero()))); // Infinity
alert(one()); // 1