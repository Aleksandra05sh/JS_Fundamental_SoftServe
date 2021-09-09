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





/*Сюда ) Решение с правками (Попытка №2)*/

function createSafePerimeterSquare(){
    var arr = [];
    var sideA = 1;
    var sideB = 1;

    arr[0] = function (number1) {
        if (typeof number1 === "number" && number1 > 0) {
            sideA = number1;
        }   
    }

    arr[1] = function (number2) {
        if (typeof number2 === "number" && number2 > 0) {
            sideB = number2;
        }
    } 

    arr[2] = function () {
        var perimeter = 2 * (sideA + sideB);
            return "Периметр равен: " + perimeter ;
    }

    arr[3] = function () {
        var square = sideA * sideB;
        return "Площадь равна: " + square;    
    }

    return arr;

}

var perimeterSquare = createSafePerimeterSquare();
perimeterSquare[0](5);
perimeterSquare[1](6);
console.log(perimeterSquare[2]());
console.log(perimeterSquare[3]());

perimeterSquare[0](-1);
perimeterSquare[1](5);
console.log(perimeterSquare[2]());
console.log(perimeterSquare[3]());


perimeterSquare[0](10);
perimeterSquare[1](true);
console.log(perimeterSquare[2]());
console.log(perimeterSquare[3]());

perimeterSquare[0](10);
perimeterSquare[1]("10");
console.log(perimeterSquare[2]());
console.log(perimeterSquare[3]());

perimeterSquare[0](NaN);
perimeterSquare[1]("10");
console.log(perimeterSquare[2]());
console.log(perimeterSquare[3]());

perimeterSquare[0](null);
perimeterSquare[1]("10");
console.log(perimeterSquare[2]());
console.log(perimeterSquare[3]());