function vowelsCounter(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split('').filter(letter => vowels.includes(letter)).length;
};

function IsIsogram(str) {
  let arr = str.toLowerCase().split('');
  let arrCheck = [];

  for (let i = 0; i < arr.length; i++) {
    if (arrCheck.includes(arr[i])) {
        return false;
    }
    arrCheck.push(arr[i]);
  }

  return true;
};

function PasswordGenerator() {
  let symbols = "abcdefghijklmnopqrstuvwxyz1234567890";
  let length = Math.floor(Math.random() * (20 - 6) + 6);
  let res = [];
  let haveDigit = false;
  let haveUpper = false;
  let haveLower = false;

  while (haveDigit != true && haveUpper != true && haveLower != true) {
    res = [];
    haveDigit = false;
    haveUpper = false;
    haveLower = false;
    for (let i = 0; i < length; i++) {
        let currentChar = symbols[Math.floor(Math.random() * symbols.length)];
        if (!isNaN(parseInt(currentChar))) {
            haveDigit = true;
            res.push(currentChar);
            continue;
        }
        if (Math.round(Math.random()) == 1) {
            currentChar = currentChar.toUpperCase();
            haveUpper = true;
            res.push(currentChar);
            continue;
        }
        else {
            haveLower = true;
            res.push(currentChar);
        }
    }
  }
  return res.join('');
};

function Validation(str) {
  return str.replace(/[.,\/#@"№?+<>\|!$%\^&\*;:{}=\-_`~()123456789]/g,"");
};

//-----------------------VOWELS------------------------

document.getElementById('vowelsCounterInput').onchange = function() {
  let str = document.getElementById('vowelsCounterInput').value;
  document.getElementById('vowelsCounterInput').value = Validation(str);
};

let vowelsForm = document.getElementById('vowelsForm');

vowelsForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let word = document.getElementById('vowelsCounterInput').value;
  document.getElementById('vowelsCounterOutput').value = vowelsCounter(word);
});

let vowelsFormClearInput = document.getElementById('clearVowelsInput');
vowelsFormClearInput.addEventListener('click', function(event) {
  document.getElementById('vowelsCounterInput').value = "";
});

let vowelsFormClearOutput = document.getElementById('clearVowelsOutput');
vowelsFormClearOutput.addEventListener('click', function(event) {
  document.getElementById('vowelsCounterOutput').value = "";
});

//-------------------------ISOGRAMM-----------------------

document.getElementById('isogramInput').onchange = function() {
  let str = document.getElementById('isogramInput').value;
  document.getElementById('isogramInput').value = Validation(str);
};

let isogrammForm = document.getElementById('isogramForm');

isogrammForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let word = document.getElementById('isogramInput').value;
  document.getElementById('isogramOutput').value = IsIsogram(word);
});

let isogrammFormClearInput = document.getElementById('clearIsogramInput');
isogrammFormClearInput.addEventListener('click', function(event) {
  document.getElementById('isogramInput').value = "";
});

let isogrammFormClearOutput = document.getElementById('clearIsogramOutput');
isogrammFormClearOutput.addEventListener('click', function(event) {
  document.getElementById('isogramOutput').value = "";
});

//--------------------------PASSWORD------------------------

let passwordForm = document.getElementById('passwordForm');

passwordForm.addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('passwordOutput').value = PasswordGenerator();
});

let passwordFormClearFieldButton = document.getElementById('clearPasswordField');
passwordFormClearFieldButton.addEventListener('click', function(event) {
  document.getElementById('passwordOutput').value = "";
});