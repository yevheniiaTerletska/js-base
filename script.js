//HOMEWORK 3

// 1. Basic Algorithm Scripting: Convert Celsius to FahrenheitPassed
function convertToF(celsius) {
  var fahrenheit;
  fahrenheit =  (celsius * 9 / 5 + 32);
  return fahrenheit;
}
// convertToF(30);

// 2. Reverse a String (раздел Basic Algorithm Scripting)
function reverseString(str) {
  var arr = str.split('');
  var reversed = arr.reverse();
  str = reversed.join('');
  return str;
}

// reverseString("hello");

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
