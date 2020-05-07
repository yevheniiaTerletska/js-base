//Щоб перевірити - потрібно розкоментувати виклик відповідної функції

//1. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//вывод fizz вместо чисел, кратных 3;
//вывод buzz вместо чисел, кратных 5;
//вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function swowInterval() {
  var n = 60;
  var i;
  for (i=1; i<=n; i+=1) {
    if (i%3 === 0 && i%5 === 0) {
      console.log("fizzbuzz");
      continue;
    } else if (i%3 === 0){
      console.log("fizz");
      continue;
    } else if (i%5 === 0){
      console.log("buzz");
      continue;
    }
    console.log(i);
  }
}
// swowInterval();

// 2. Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.

function showMultipleNumbers() {
  var numStart = 45;
  var numEnd = 670;
  while (numStart <= numEnd) {
    if(numStart%10 === 0){
      console.log(numStart)
    }
    numStart+=1;
  }
}
// showMultipleNumbers();


//3. Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
function showNumbers() {
  var numStart = 45;
  var numEnd = 67;
  while (numStart<=numEnd) {
    console.log(numStart);
    numStart+=1;
  }
}
// showNumbers();


//4. Напишите скрипт, который используя оператор for выполнит два предыдущих задания.
function showCommon() {
  var numStart = 45;
  var numFirst = 67;
  var numSecond = 670;

  for (numStart; numStart<=numSecond;) {
    if (numStart<=numFirst){
      console.log(numStart);
      numStart += 1;
      continue;
    } else if (numStart%10 === 0) {
      console.log(numStart);
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