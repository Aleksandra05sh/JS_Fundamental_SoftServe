// Operations with variables. Задание №1.
// Дана сторона квадрата a. Найдите его площадь s = a * a.
var sideA = 5;
var s = sideA * sideA;
console.log(s);




// Operations with variables.Задание №2.
// Дано двузначное число. Выведите на консоль вначале его левую цифру (десятки), а затем – его правую цифру (единицы). Для нахождения десятков использовать операцию деления нацело, для нахождения единиц – операцию взятия остатка от деления.
var twoDigitNumber = 67;
console.log(parseInt(twoDigitNumber / 10));
console.log(twoDigitNumber % 10);




// Operations with variables. Задание №3.
// Даны два целых числа: a, b. Проверьте истинность высказывания: a > 2 и b ≤ 3
var integerA = 10;
var integerB = 33;
console.log(integerA > 2 && integerB <= 3);





// Operations with variables.Задание №4.
// Даны три целых числа: a, b, c. Проверьте истинность высказывания: a < b < c.
var a = 3;
var b = 7;
var c = 10;
console.log(a < b && b < c);




// Operations with variables. Задание №5.
// Дано целое положительное число. Проверьте истинность высказывания: данное число является нечетным трехзначным.
var positiveInteger = 998;
console.log(positiveInteger % 2 === 0 && positiveInteger >= 100 && positiveInteger <= 999);
