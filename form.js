//HOMEWORK 6
//Form
var loginForm = document.getElementById('form');
var emailInput = document.querySelector('[type = text]');
var passwordInput = document.querySelector('[type=password]');
var validationForEmail = document.getElementById('validateEmail');
var validationForPassword = document.getElementById('validatePassword');
var submitButton = loginForm.querySelector('[type = submit]');

validationForEmail.style.color = 'red';
validationForPassword.style.color = 'red';

submitButton.disabled = true;

function emailInputHandler() {
  startInputDate = true;
  if (!event.target.value.includes('@')){
    validationForEmail.innerText = 'email should contain @ symbol';
  } else validationForEmail.innerText = '';
};

function passwordInputHandler() {
  if (event.target.value.length > 6){
    validationForPassword.innerText = 'password should be less than 6 symbols';
  } else validationForPassword.innerText = '';

}

function buttonStatus() {
  if ((!validationForEmail.innerText.length) && (!validationForPassword.innerText.length) && emailInput.value.length && passwordInput.value.length){
    submitButton.disabled = false;
  } else submitButton.disabled = true;
}

function sendData() {
  event.preventDefault();
  console.log('submit');
}

emailInput.addEventListener('input', emailInputHandler);
passwordInput.addEventListener('input', passwordInputHandler);
loginForm.addEventListener('submit', sendData);
loginForm.addEventListener('input', buttonStatus);


//****************** FreeCodeCamp *********************************
//Basic Algorithm Scripting: Slice and Splice
//You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  var arr2Copy = arr2.slice();
  arr2Copy.splice(n, 0,  arr1);
  return arr2Copy.flat();
}
// console.log(frankenSplice([1, 2], ["a", "b"], 1));


//Basic Algorithm Scripting: Falsy Bouncer
//Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  return arr.filter(function (value) {
    return Boolean(value) != false;
  });
}
console.log( bouncer([7, "ate", null, "", false, 9]));

//Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) { return a - b; });
  return  arr.indexOf(num);
}

console.log( getIndexToIns([40, 60, 1, 4], 50));

function mutation(arr) {
  var arrNew0 = arr[0].toLowerCase().split('');
  var arrNew1 = arr[1].toLowerCase().split('');
  var endValue = true;
  arrNew1.map(function (value) {
    if (!arrNew0.includes(value)){
      endValue = false;
    }
  });
  return endValue;
}
// console.log(mutation(["hello", "Hello"]));

//Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//****************************** END **************************************************************************************

// var button = document.getElementById(('clickButton'));
// function result () {
//   console.log(this.innerText);
//   button.innerText = 'john'
//
// }
// button.addEventListener('click', result);
// button.removeEventListener('click', result);


//Homework 5

//find the longest word (string)
function findLongestWordLength(str) {
  // 4.2
  var arr =  str.split(' ').map(function (value) {

  });
  str = str.split(' ');
  str.sort(function (a, b) {
    return b.length - a.length;
  });
  str.length = str.shift().length;

  return str.length;
}
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function findLongestWordLength(str) {
  var i;
  var counter = 0;
  var LongestWordLength = 0;
  for (i = 0; i < str.length; i+=1){
  if (str[i] !== ' '){
    counter +=1;
  } else {
    if (LongestWordLength < counter){
      LongestWordLength = counter;
    }
      counter = 0
  }
  }
  return LongestWordLength;
}
// console.log(findLongestWordLength("The quick brown fox jumped over tkkkkkkhe lazy d"));

//1. Basic Algorithm Scripting: Truncate a StringPassed
function truncateString(str, num) {
  if (num >= str.length){
    return str;
  }
    return str.substring(0, num) + '...';
}
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

//2. Basic Algorithm Scripting: Finders Keepers
function findElement(arr, func) {
  return arr.find(func);
}
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));


//3. Basic Algorithm Scripting: Boo who
//Check if a value is classified as a boolean primitive.
// Return true or false.

function booWho(bool) {
    return typeof bool === 'boolean';
}
booWho(3);

//4. Basic Algorithm Scripting: Title Case a Sentence
//Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  var  newArr = arr.map(function(value) {
    return value[0].toUpperCase() + value.substring(1, value.length);
  });
  return newArr.join(' ');
  }

titleCase("sHoRt AnD sToUt");


//**********************************************************************************************************************
//1.  поліфіл для bind
// function fn(x) {
//   console.log(this.a, x)
// }
// function bind(handler, context, args) {
//   return function () {
//     return handler.call(context, args);
//   }
// }
// bind(fn, obj, 'text');





//4. function constructor
function Example(name, age) { //1. this = {}
  this.name = name; //2. this = {name: 'Bob'}
  this.age = age; //2. this = { name: 'Bob', age: 12 }

}
var example = new Example('Bob', 12); //3. return this
// console.log(example);

// var user = {
//   firstName: 'Vova',
//   sayHi: function () {
//     console.log(this.firstName);
//
//   }
// }
// var result = user.sayHi.bind(user);
//
// setTimeout(result, 1000);

//Events



//HOMEWORK 4

//1. 1. Дан массив [1, 2, [3, 4, [5, 6]]];
// Напишите функцию, которая будет рекурсивно выравнивать массив, где результатом будет [1, 2, 3, 4, 5, 6].
// Также найдите метод массива, который уже это делает и разберитесь самостоятельно как это работает.

function flat(arr) {
  return arr.reduce(function (acc, value) {
    return acc.concat(Array.isArray(value) ? flat(value) : value)//concat = push
  }, [])
}

var arr = [1, 2, 3, 4, 5];

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 5);

// console.log( result ); // 15
//
function flat(arr) {
  var arrNew = [];
  var i;
  arr.map(function alignArr(acc, value) {
    for (i=0; i< arr.length; i++){
      if (Array.isArray(arr[i])) {
        return alignArr(acc, value);
      }
      else {
        return arrNew.push(arr[value]);
      }
    }
  });
  return arrNew;
}
// console.log(flat([5, 8, [3, 4, [5, 6]]]));
//

// function flat (arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       var value = flat(arr[i]);
//       value.forEach(function(value)
//       { newArr.push(value); })
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
//
// console.log( flat([[1, 2], 3, [4, [[5]]]]));


// function alignArr(arr) {
//   var newArr = [];
//   function helperFunction(helperArr) {
//     if (helperArr.length === 0) {
//       return;
//     }
//     var firstArrVal = helperArr.shift();
//     var isAnArray = Array.isArray(firstArrVal);
//     if (isAnArray) {
//       return helperFunction(firstArrVal);
//     }
//     else {
//       newArr.push(firstArrVal);
//       return helperFunction(helperArr);
//     }
//   }
//   helperFunction(arr);
//   return newArr;
// }
// flat([1, 2, [3, 4, [5, 6]]]);

//2. . Дан массив [1, 2, 3, 4, 5, 6]. Найдите сумму чисел рекурсивно.
//
var numbers = [1, 2, 3, 4, 5, 6];
var sum = 0;
function getSum() {
  sum += numbers.pop();
  if ( numbers.length != 0) {
    sum = getSum();
  }
  return sum;
}
// console.log(getSum());

//3. Basic Algorithm Scripting: Factorialize a Number

function factorialize(num){
  if (num === 0) {
    return 1;
  }  return num * factorialize(num - 1);
}
factorialize(5);

//4. Basic Algorithm Scripting: Find the Longest Word in a String

// function findLongestWordLength(str) {
//   4.2
//   var arr =  str.split(' ').map(function (value) {
//
//   });
//     str = str.split(' ');
//     str.sort(function (a, b) {
//       return b.length - a.length;
//     });
//     str.length = str.shift().length;
//
//   return str.length;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//5. Basic Algorithm Scripting: Return Largest Numbers in Arrays

function largestOfFour(arr) {
  //5.2
  var newArr = [];
  arr.map(function (value) {
    newArr.push(Math.max.apply(Math, value));
  });
  return newArr;
  // function largestOfOne(arr) {
  //   arr.sort(function (a, b) {
  //     return b - a;
  //   });
  //   arr = arr.shift();
  //   return arr;
  // };
  // arr = arr.map(largestOfOne);
  // console.log(arr);
  // return arr;
}
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//6. Basic Algorithm Scripting: Confirm the Ending

function confirmEnding(str, target) {
  // 6.2 return str.substring(str.length - target.length) === target;
  return str.slice(-target.length) === target;
}
// console.log(confirmEnding("Bastian", "n"));


//Функция haveFun принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4.
// Верните результатом функции haveFun сумму 3 и 4.

function haveFun(a, b) {
  return a + b;
}
// console.log(haveFun((function () {return 3;})(), (function () {return 4;})()));


//HOMEWORK 3

// 1. Basic Algorithm Scripting: Convert Celsius to FahrenheitPassed
function convertToF(celsius) {
  return celsius * 9 / 5 + 32;
}
// convertToF(30);

// 2. Reverse a String (раздел Basic Algorithm Scripting)
function reverseString(str) {
  return str.split('').reverse().join('');
}
// console.log(reverseString("hello"));

// 3. Basic Algorithm Scripting: Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  if(num <= 0 ) {
    str = '';
  } else {
    var times = 1;
    var strAdded = str;
    for (times; times < num; times+=1){
      str +=strAdded;
    }
  }
  return str;
}
repeatStringNumTimes("Abc", -8);

// 4. Создайте массив arr с числовыми величинами 45,78,10,3.
// Добавьте в массив arr еще одно число.
// Посчитайте в переменную sum сумму чисел в нем, при помощи цикла for/while.

var arr = [45, 78, 10, 3];
var newNumber = arr.push(47);
function arraySum(arr){
  var sum = 0;
  var index = 0;
  for(index; index < arr.length; index+=1){
    sum += arr[index];
  }
  // console.log(sum);
}
arraySum(arr);

// 5. .Дан объект Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// 5.1
// var salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// var sum = 0;
// var prop;
// for (prop in salaries){
//   sum +=salaries[prop];
// }
// console.log(sum);

//5.2
// var salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// var salariesValues = Object.values(salaries);
// var sum = 0;
// var newArray;
// newArray = salariesValues.forEach(function (currentValue) {
//   sum+= currentValue;
//
// });
// console.log(sum);

// 5.3
// var salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// var salariesValues = Object.values(salaries);
// var sum = 0;
// var newArray;
// newArray = salariesValues.map(function (currentValue) {
//   return sum+= currentValue;
//
// });
// console.log(sum);

//**********************************************************************************************************************
//HOMEWORK 2

//1. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//вывод fizz вместо чисел, кратных 3;
//вывод buzz вместо чисел, кратных 5;
//вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function swowInterval() {
  var n = 60;
  var i;

  for (i = 1; i <= n; i +=1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }
    else if (i % 3 === 0){
      console.log("fizz");
    }
    else if (i % 5 === 0){
      console.log("buzz");
    }

    console.log( i );
  }
}
// swowInterval();

// 2. Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.

function showMultipleNumbers() {
  var numStart = 45;
  var numEnd = 670;
  while (numStart <= numEnd) {
    if(numStart % 10 === 0){
      console.log( numStart )
    }
    numStart +=1;
  }
}
// showMultipleNumbers();


//3. Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
function showNumbers() {
  var numStart = 45;
  var numEnd = 67;
  while (numStart <= numEnd) {
    console.log( numStart );
    numStart +=1;
  }
}
// showNumbers();


//4. Напишите скрипт, который используя оператор for выполнит два предыдущих задания.
function showCommon() {
  var numStart = 45;
  var numFirst = 67;
  var numSecond = 670;

  for (numStart; numStart<=numSecond;) {
    if (numStart <= numFirst){
      console.log( numStart );
    }
    else if ( numStart % 10 === 0) {
      console.log( numStart );
    }
    numStart+=1;
  }
}
// showCommon();


//5. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
//Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Для n = 10 результат должен быть 2,3,5,7.

// 1.
function swowSimpleNumbers() {
  var n = 10;
  var num = 2;
  var dil;
  for (num; num<=n; num+=1) {
    var simple = true;
    for (dil=2; dil<num; dil+= 1) {
      if (num % dil === 0) {
        simple = false;
        break
      }
    }if (simple === true){
      console.log(num)
    }
  }
}
// swowSimpleNumbers();

// 2.
function swowSimpleNumbers() {
  var n = 30;
  var num;
  var dil;
  swowSimpleNumbersCycle:
    for (num = 2; num <= n; num+=1) {
      for (dil = 2; dil < num; dil+=1) {
        if (num % dil === 0) continue swowSimpleNumbersCycle;
      }
      console.log( num );
    }
}
// swowSimpleNumbers();

//********************************************************************

// var object = {
//   name: "me",
//   age: 23,
//   isAdmin: true
//
// };
//
// object.isAdmin = false; //update
// delete object.age; //delete
// object.country = 'ukraine';
// object['city'] = 'kyiv';
//
// console.log(object);
//
// for (prop in object) {
//   if(typeof object[prop] === 'string'){
//     delete object[prop];
//   }
//
// }
// console.log(object[prop]);
//
// function multiply(a, b) {
//   return a * b;
// }
//
// let result = multiply(1, 2);
// console.log( result ); // 3



//  HOISTING

//1. Ініціалізація
// lexical envirement = { fn: say, a: undefined} - функція читається, змінна undefined (var i = 3 - теж undefined) читається (піднімається) тільки var i
// 2. Присвоєння
// lexical envirement = {fn: say, a: 2}
var a = 2;
function fn() {
  // console.log(a); // інтерпретатор спочатку переглядає лексичне оточення всередині функції - якщо в ній є значення var a - він його бачить і тоді undefined; якщо немає - він дивиться назовні (глобальні змінні і присвоює їх)
  var b = 3;
  // console.log(b)

}
fn();

var x = 3;
var y = 8;
var result = x++ % y--;
// console.log(result);
