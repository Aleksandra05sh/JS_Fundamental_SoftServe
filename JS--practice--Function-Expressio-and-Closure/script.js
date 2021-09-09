/*Задание №1.
Есть следующее определение функции:
function add(x, y) {
   return x + y;
}
Перепишете определение функции add() используя синтаксис Function Expression.*/

var add = function (x, y) {
    return x + y;
 }

 console.log(add(2, 4))     



 /*Задание №1.
 Есть следующий код:
 function createArrayIterator(array) {
    // Ваш код
 }
 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined
 Допишите код, чтобы функция createArrayIterator() возвращала функцию-перечислитель для массива, который задается через параметр array.*/


 function createArrayIterator(array) {
    var i = 0;
    return function () {
        return array[i++];
    }
 }

 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined




/* Задание №2.
Напишите код для "безопасного" вычисления периметра и площади прямоугольника.
Сторонами прямоугольника может быть только число (тип данных Number, значения других типов данных нельзя устанавливать), значение которого, строго больше 0.*/


// function createSafePerimeterSquare(){
//     var arr = [];
//     var sideA;
//     var sideB;
//     var error;

//     arr[0] = function (number1, number2) {
//         if (typeof number1 === "number" && typeof number2 === "number" && number1 > 0 && number2 > 0) {
//             sideA = number1;
//             sideB = number2;
//             error = false;

//         } else {
//             error = true;
//         }
//     }   

//     arr[1] = function() {
//         var Perimeter = 2 * (sideA + sideB);
//         var Square = sideA * sideB;
        
//         if (error) {
//             return "Ведены некорректные данные";
//         } else {
//             return ["Периметр равен: " + Perimeter, "Площадь равна: " + Square];
//         }
//     }

//     return arr;
// }    


// var PerimeterSquare = createSafePerimeterSquare();
// PerimeterSquare[0](1, 0);
// console.log(PerimeterSquare[1]());

// PerimeterSquare[0](1, 2);
// console.log(PerimeterSquare[1]());

// PerimeterSquare[0](-1, "привет");
// console.log(PerimeterSquare[1]());

// PerimeterSquare[0](true, 2);
// console.log(PerimeterSquare[1]());

// PerimeterSquare[0](NaN, 2);
// console.log(PerimeterSquare[1]());

// PerimeterSquare[0]("", 2);
// console.log(PerimeterSquare[1]());

// PerimeterSquare[0](null, 2);
// console.log(PerimeterSquare[1]());




/*Сюда ) Решение с правками */

function createSafePerimeterSquare(){
    var arr = [];
    var sideA;
    var sideB;

    arr[0] = function (number1) {
        if (typeof number1 === "number" && number1 > 0) {
            sideA = number1;
        } else {
            sideA = 0;
            console.log("Введено некорректное значение");
        }
    }

    arr[1] = function (number2) {
        if (typeof number2 === "number" && number2 > 0) {
            sideB = number2;
        }
        else {
            sideB = 0;
            console.log("Введено некорректное значение");
        }
    } 

    arr[2] = function Perimeter() {
        var Perimeter = 2 * (sideA + sideB);
        if (sideA === 0 || sideB === 0 ) {
            return "Были введены некорректные данные";
            } else {
            return "Периметр равен: " + Perimeter ;
            }
    }

    arr[3] = function Square() {
        var Square = sideA * sideB;
        if (sideA === 0 || sideB ===0 ) {
            return "Были введены некорректные данные";
            } else {
            return "Площадь равна:: " + Square;
            }
    }
    return arr;

}

var PerimeterSquare = createSafePerimeterSquare();
PerimeterSquare[0](5);
PerimeterSquare[1](6);
console.log(PerimeterSquare[2]());
console.log(PerimeterSquare[3]());

PerimeterSquare[0](-1);
PerimeterSquare[1](6);
console.log(PerimeterSquare[2]());
console.log(PerimeterSquare[3]());