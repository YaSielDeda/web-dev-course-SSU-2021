function func(cols, rows, string) {
  if (parseInt(cols) == NaN || parseInt(cols) < 0 ||
      parseInt(rows) == NaN || parseInt(rows) < 0)
  return "Incorrect values";

  let res = "";
  let pos = 0;

  for (let i = 0; i < cols; i++) {
    res += "+---".repeat(rows) + "+\n";
    for (let j = 0; j < rows; j++) {
      res += "| " + (string[pos] == undefined ? " " : string[pos]) + " ";
      pos++;
    }
    res += "|\n";
  }
  res += "+---".repeat(rows) + "+";

  return res;
};

console.log(func(4, 4, 'Hello World!'));
console.log(func(4, 3, 'Nice pattern'));
console.log(func(3, 4, 'Nice pattern'));