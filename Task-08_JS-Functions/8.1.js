function func() {
  let symbols = "abcdefghijklmnopqrstuvwxyz1234567890";
  let length = Math.floor(Math.random() * (20 - 6) + 6);
  let res = [];
  let haveDigit = false;
  let haveUpper = false;
  let haveLower = false;

  while (haveDigit != true && haveUpper != true && haveLower != true)
  {
    res = [];
    haveDigit = false;
    haveUpper = false;
    haveLower = false;
    for (let i = 0; i < length; i++) {
        let currentChar = symbols[Math.floor(Math.random() * symbols.length)];
        if (!isNaN(parseInt(currentChar)))
        {
            haveDigit = true;
            res.push(currentChar);
            continue;
        }
        if (Math.round(Math.random()) == 1)
        {
            currentChar = currentChar.toUpperCase();
            haveUpper = true;
            res.push(currentChar);
            continue;
        }
        else
        {
            haveLower = true;
            res.push(currentChar);
        }
    }
  }
  return res.join('');
};

for (let i = 0; i < 10; i++) {
    alert(func());
}
