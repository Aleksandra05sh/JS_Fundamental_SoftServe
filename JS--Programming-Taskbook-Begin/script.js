// Begin1◦
// Дана сторона квадрата a. Найти его периметр P = 4·a.
var squareSideA = 5;
var squarePerimeterP = 4 * squareSideA;
console.log(squarePerimeterP);


// Begin2◦
// Дана сторона квадрата a. Найти его площадь S = a 2
var squareS = squareSideA * squareSideA;
console.log(squareS);


// Begin3◦
// Даны стороны прямоугольника a и b. Найти его площадь S = a·b и
// периметр P = 2·(a + b).
var rectangleSideA = 7;
var rectangleSideB = 10;
var rectanglePerimeterP = 2 * (rectangleSideA + rectangleSideB);
console.log(rectanglePerimeterP);


// Begin4◦
// Дан диаметр окружности d. Найти ее длину L = π·d. В качестве
// значения π использовать 3.14.
var diameter = 7;
var P = 3.14;
var circleLengthL = diameter * P;
console.log(circleLengthL);


// Begin5◦
// Дана длина ребра куба a. Найти объем куба V = a*a*a и площадь его поверхности S = 6·a*a 

var cubeSideA = 15;
var cubeVolumeV = cubeSideA * cubeSideA * cubeSideA;
var cubeSquareS = 6 * cubeSideA * cubeSideA;
console.log(cubeVolumeV);
console.log(cubeSquareS);


// Begin6◦
// Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).

var parallelepipedSideA = 3;
var parallelepipedSideB = 4;
var parallelepipedSideC= 7;
var parallelepipedVolumeV  = parallelepipedSideA * parallelepipedSideB * parallelepipedSideC;
var parallelepipedSquareS = 2 * (parallelepipedSideA * parallelepipedSideB + parallelepipedSideB * parallelepipedSideC + parallelepipedSideA * parallelepipedSideC);
console.log(parallelepipedVolumeV);
console.log(parallelepipedSquareS);


// Begin8◦
// Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2.
numberA = 100;
numberB = 50;
var average = (numberA + numberB) / 2;
console.log(average);


// Begin23
// Даны переменные A, B, C. Изменить их значения, переместив содержимое A в B, B — в C, C — в A, и вывести новые значения переменных A, B, C.
var numA = 10;
var numB = 15;
var numC = 20;
var tmpB = numB;
numB = numA;
var tmpC = numC;
numC = tmpB;
numA = tmpC;
console.log(numA);
console.log(numB);
console.log(numC);


// Begin31◦
// Дано значение температуры T в градусах Фаренгейта. Определить начение этой же температуры в градусах Цельсия. Температура по Цельсию TC и температура по Фаренгейту TF связаны следующим соотноше-
// нием: TC = (TF − 32)·5/9.
var temperatureTF = 90;
temperatureTC = (temperatureTF - 32) * (5 / 9);
console.log(temperatureTC);


// Begin33◦
// Известно, что X кг конфет стоит A рублей. Определить, сколько
// стоит 1 кг и Y кг этих же конфет.

var weighX = 4;
var sumX = 100;
var price = sumX / weighX;
var weighY = 8;
var sumY = price * weighY;
console.log(price);
console.log(sumY);

