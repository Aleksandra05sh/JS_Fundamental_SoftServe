/*Задание №1.
Напишите рекурсивную функцию digitSum(k), которая находит сумму цифр целого числа k, не используя циклы.*/

function digitSum(k) {
    if (k === 1) {
        return 1;
    } else {
        return k + digitSum(k - 1);
    }
}

var res = digitSum(10);
console.log(res);



 /*Задание №1.
Есть следующий код:
function format(data, type) {
   // Ваш код
}
var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
Допишите код, чтобы функция format(data, type) переопределяла себя в зависимости от параметра type:
Если значением параметра type является строка "number", то переопределенная версия функции format() преобразует значение параметра data в число и возвращает результат;
Если значением параметра type является строка "string", то переопределенная версия функции format() преобразует значение параметра data в строку и возвращает результат;
Если значением параметра type является строка "boolean", то переопределенная версия функции format() преобразует значение параметра data в логическое значение и возвращает результат;
При других значениях параметра type функция format() не переопределяет себя. */


function format(data, type) {
    if (type === "number") {
        format = function() {
            return Number(data);
        }
    } else if (type === "string") {
        format = function() {
            return String(data);
        }
    } else if (type === "boolean") {
        format = function() {
            return Boolean(data);
        }
    } 
}

 var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"