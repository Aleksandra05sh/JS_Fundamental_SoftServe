/*For37. Дано целое число N (> 0). Найти сумму
1^1+ 2^2 + . . . + N^N .
Чтобы избежать целочисленного переполнения, вычислять слагаемые этой суммы с помощью вещественной переменной и выводить резуль- тат как вещественное число.*/


function calcExponent(number) {
    var res = 0;
    for (var i = 1; i <= number; i++){
        var tmpPow = 1
        for (var j = 1; j <= i; j++){
            tmpPow = tmpPow * i;
        }
        res = res + tmpPow;
    }

    return res;
}

console.log(calcExponent(4));



/*For38. Дано целое число N (> 0). Найти сумму
1^N + 2^N−1 + . . . + N^1
Чтобы избежать целочисленного переполнения, вычислять слагаемые этой суммы с помощью вещественной переменной и выводить резуль-тат как вещественное число.*/


function calcExponent2(number) {
    var res = 0;
    var exponent = number;
    for (var i = 1; i <= number; i++) {
        var tmpPow = 1;
        for (var j = exponent; j >= 1; j--) {
            tmpPow = tmpPow * i;
        }
        res = res + tmpPow;
        exponent--
    }

    return res;
}

console.log(calcExponent2(5));



/*For39 решение: https://github.com/Aleksandra05sh/JS_Fundamental_SoftServe/tree/JS--Programming-Taskbook-For/JS--Programming-Taskbook-For
уже проверял*/

