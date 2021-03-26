// валидация работает, но не выводится предупреждение confirm
let salary = 0;
let summSalary = 0;
let averagesalary = 0;
let index = 0;
while (true) {

  salary = +prompt("Ваша зп?", ''); index++;
if (typeof salary === String || typeof salary === null) {
   userAnsw = confirm ('Вы ввели не число!');{
        if (userAnsw === false) {
            break;
    } else {
        continue;
    }
}
}
  if (!salary) break;

  summSalary += salary;
  averagesalary = summSalary / index;
}

alert( 'Общая сумма: ' + summSalary + '. Средняя зп: ' + averagesalary);
