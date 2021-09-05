/*Задание №1.  Напишите функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.*/
function pow(x, n) {
    var res = 1; 
    if (n < 0) {
        for (var i = -1; i >= n; i--) {
            res = res * (1 / x);
        }
    } else if (n === 0){
        res = 1;
    } else {
        for (var i = 1; i <= n; i++) {
        res = res * x;
        }
    }    
    return res;
} 

console.log(pow(3, -4));



/*Задание №2. Напишите функцию minMax(x, y), которая возвращает минимальное из x и y.*/
function minMax(x, y) {
    var min;
    if (x <= y) {
        min = x;
    } else {
        min = y;
    }
    return min;
}

console.log(minMax(-4, -10));



/*Задание №3. Напишите функцию sign(x) целого типа, возвращающую для вещественного числа x следующие значения:
– -1, если x < 0;
– 0, если x = 0;
– 1, если x > 0.*/

function sign(x) {
    var mathSing;
    if (x < 0) {
        mathSing = -1;
    } else if (x === 0){
        mathSing = 0;
    } else {
        mathSing = 1;
    }
    return mathSing;
}

console.log(sign(0));



/*Задание №4. Напишите функцию calc(a, b, op), которая выполняет над числами a и b одну из арифметических операций и возвращает ее результат. Вид операции определяется целым числом op: 1 – вычитание, 2 – умножение, 3 – деление, остальные значения – сложение.*/

function calc(a, b, op) {
    var resOp;
    switch (op) {
        case 1:
            resOp = a - b;
            break;
        case 2:
            resOp = a * b;
            break;
        case 3:
            resOp = a / b;
            break;   
        default:
            resOp = a + b;
            break;  
    }
    return resOp;
}

console.log(calc(5, 7, 0));



/*Задание №5. Напишите функцию digitN(k, n), которая возвращает n-ю цифру целого положительного числа k (цифры в числе нумеруются справа налево). Если количество цифр в числе k меньше n, то функция возвращает -1.*/

function digitN(k, n) {
    var num;
    if (k === 0) {
        num = 0;
    } else {
        for (var i = 1; i <= n; i++ ) {
            if (k > 0) {
                num = k % 10;
                k = parseInt(k / 10);
            } else {
                num = -1;
                break;
            }
        }   
    }   
    return num;
}

console.log(digitN(50, 5));
