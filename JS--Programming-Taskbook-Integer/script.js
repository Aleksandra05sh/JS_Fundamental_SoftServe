// Integer1◦
// Дано расстояние L в сантиметрах. Используя операцию деления
// нацело, найти количество полных метров в нем (1 метр = 100 см).
var lengthL = 567;
console.log(parseInt(lengthL / 100));


// Integer3◦
// Дан размер файла в байтах. Используя операцию деления нацело,
// найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).
var byte = 789654;
console.log(parseInt(byte / 1024));

// Integer4◦
// . Даны целые положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений). Используя операцию деления нацело, найти количество
// отрезков B, размещенных на отрезке A.
var integerA = 15
var integerB = 2;
console.log(parseInt(integerA / integerB));


// Integer5◦
// Даны целые положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений). Используя операцию взятия остатка от деления нацело, найти длину незанятой части отрезка A.
console.log(integerA % integerB);


// Integer7◦
// . Дано двузначное число. Найти сумму и произведение его цифр.
var twoDigitNum = 15;
var numFirst = parseInt(twoDigitNum / 10);
var numSecond = twoDigitNum % 10;
console.log(numFirst + numSecond);
console.log(numFirst * numSecond);


// Integer8◦
// . Дано двузначное число. Вывести число, полученное при перестановке цифр исходного числа.
console.log(Number(String(numSecond) + String(numFirst)));
// вариант 2
console.log(numSecond * 10 + numFirst);


// Integer9◦
// Дано трехзначное число. Используя одну операцию деления нацело, вывести первую цифру данного числ(сотни).
var threeDigitNum = 345;
var numberFist = parseInt(threeDigitNum / 100);
console.log(numberFist);


// Integer10◦
//Дано трехзначное число. Вывести вначале его последнюю цифру (единицы), а затем — его среднюю цифру (десятки).
var numberThird = threeDigitNum % 10;
console.log(numberThird);
var numberSecond = parseInt(threeDigitNum/10) % 10;
console.log(numberSecond);


// Integer11◦
//  Дано трехзначное число. Найти сумму и произведение его цифр.
console.log(numberFist + numberSecond + numberThird);
console.log(numberFist * numberSecond * numberThird);


// Integer12◦
// .Дано трехзначное число. Вывести число, полученное при прочтении исходного числа справа налево.
console.log((numberThird * 100) + (numberSecond * 10) + numberFist);


// Integer13◦
//  Дано трехзначное число. В нем зачеркнули первую слева цифру и
// приписали ее справа. Вывести полученное число.
console.log((numberSecond * 100) +(numberThird * 10) + numberFist);


// Integer17◦
// Дано целое число, большее 999. Используя одну операцию деления нацело и одну операцию взятия остатка от деления, найти цифру, соответствующую разряду сотен в записи этого числа.
var digitNum = 34678;
var numHundreds = parseInt((digitNum % 100) / 10);
console.log(numHundreds);


// Integer24◦
// Дни недели пронумерованы следующим образом: 0 — воскресенье, 1 — понедельник, 2 — вторник, . . . , 6 — суббота. Дано целое число K, лежащее в диапазоне 1–365. Определить номер дня недели для K-го дня года, если известно, что в этом году 1 января было понедельником.
var k = 365; 
var firstJanuary = 1;
var dayOfWeek = k % 7; 
console.log(dayOfWeek);


// Integer25◦
// Дни недели пронумерованы следующим образом: 0 — воскресенье, 1 — понедельник, 2 — вторник, . . . , 6 — суббота. Дано целое число K, лежащее в диапазоне 1–365. Определить номер дня недели для K-го дня года, если известно, что в этом году 1 января было четвергом.
var k = 53;
var firstJanuary = 4;
var dayOfWeek = (k +firstJanuary -1 ) % 7; 
console.log(dayOfWeek);


// Integer26◦
// Дни недели пронумерованы следующим образом: 1 — понедельник, 2 — вторник, . . . , 6 — суббота, 7 — воскресенье. Дано целое число K,лежащее в диапазоне 1–365. Определить номер дня недели для K-го дня года, если известно, что в этом году 1 января было вторником.
var k = 1;
var firstJanuary = 2;
var dayOfWeek = (k +firstJanuary -1 ) % 7; 
console.log(dayOfWeek);