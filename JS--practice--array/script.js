/*Задание №1.
1. Создайте пустой массив;
2. В первый элемент массива запишите любое число;
3. Во второй элемент массива запишите любую строку;
4. В третий элемент массива запишите любое логическое значение;
5. В четвертый элемент массива запишите значение null;
6. Выведете на экран число элементов, которое хранится в массиве;
7. Запросите у пользователя ввести любое значение и запишите это значение в пятый элемент массива;
8. Выведете на экран пятый элемент массива.*/

var arr = [];
arr[0] = 5;
arr[1] = "Hi";
arr[2] = true;
arr[3] = null;
console.log(arr.length);
arr[4] = prompt("Введите значение: ", "5");
console.log(arr[4]);


