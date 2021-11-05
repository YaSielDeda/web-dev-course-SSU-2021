function func(number) {

  if (!number.constructor === Array)
    return 'Invalid input';

  if (number.length != 10)
    return 'Invalid input';

  if (number.some(x => x < 0))
    return 'Invalid input';
  
  number.forEach(element => {
      if (parseInt(element, 10) == NaN)
      return 'Invalid input';
  });

  let res = "+7 " + "(" + number[0] + number[1] + number[2] + ") " +
            number[3] + number[4] + number[5] + "-" + 
            number[6] + number[7] + "-" + number[8] + number[9];

  return res;
};

let number1 = [9, 0, 0, 1, 1, 1, 2, 2, 3, 3];
let number2 = [9, 2, 7, 5, 5, 5, 6, 6, 9, 0];
let number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -11];
let number4 = [];
let number5 = 'aw93fha=';

let numbers = [number1, number2, number3, number4, number5];

for (let i = 0; i < 5; i++) {
    alert(func(numbers[i]));
}
