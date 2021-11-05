function binom(n)
{
    if (parseInt(n) == NaN)
      return "Invalid input";

    if (n == 1)
      return 1;
    
    let s = "";

    if (n < 0)
      s = "1 / (";

    s += "a^" + n;
    
    for (let i = 1; i <= n - 1; i++)
        s += " + " + bk(n, i) + (n - i == 1 ? "a" : "a^" + (n - i))  + (i == 1 ? "b" : "b^" + i);
    
    s += " + b^" + n;

    if (n < 0)
    s += ")";

    return s;
};

function bk(n, k)
{
    let t = 1;

    for (let i = n - k + 1; i <= n; i++)
        t = t * i;

    for (let i = 2; i <= k; i++)
        t = t / i;

    return t;
};

let n = prompt("binomial degree: ");
alert(binom(n));