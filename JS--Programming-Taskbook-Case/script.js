/*Case1. Дано целое число в диапазоне 1–7. Вывести строку — название дня недели, соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.).*/

var x = 3;
switch (x) {
  case 1:
    console.log("понедельник");
    break;
  case 2:
    console.log("вторник");
    break;
  case 3:
    console.log("среда");
    break;
  case 4:
    console.log("черверг");
    break;
  case 5:
    console.log("пятница");
    break;           
  case 6:
    console.log("суббота");
    break; 
  case 7:
    console.log("воскресенье");
    break;
  default:
    console.log("Неизвестное значение");
    break; 
  
}


/*Case3. Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 — фе враль и т. д.). Вывести название соответствующего времени года («зима», «весна», «лето», «осень»).*/

var y = 9;
switch (y) {
  case 1:
  case 2:
  case 12:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5: 
    console.log("spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("autumn");
    break;           
  default:
    console.log("Неизвестное значение");
    break;     
}


/* Case5. Арифметические действия над числами пронумерованы следующим образом: 1 — сложение, 2 — вычитание, 3 — умножение, 4 — деление. Дан номер действия N (целое число в диапазоне 1–4) и вещественные числа A и B (В не равно 0). Выполнить над числами указанное действие и вывести результат.*/

var a = 20;
var b = 10;
var n = 3;
var res;

switch (n) {
  case 1:
    res = a + b;
    break;
  case 2:
    res = a - b;
    break;
  case 3:
    res = a * b;
    break;
  case 4:
    res = a / b;
    break;      
}
console.log(res);


/*Case6. Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. Дан номер единицы длины (целое число в диапазоне 1–5) и длина отрезка в этих
диницах (вещественное число). Найти длину отрезка в метрах.*/

var lenght = 1000;
var n = 5;
var res;
switch (n) {
  case 1:
    res = lenght / 10;
    break;
  case 2:
    res = lenght * 1000;
    break;
  case 3:
    res = lenght;
    break;
  case 4:
    res = lenght / 1000;
    break;
  case 5:
    res = lenght / 100;
    break;
}
console.log(res);

