
let salary = 0;
let summSalary = 0;
let averageSalary = 0;
let historySalary = '';
let index = 0;

while (true) {
  salary = prompt(getInfo(summSalary, averageSalary, historySalary) + '\nВаша зп?'); index++;
  if (salary === null) {
      if (confirm ('Вы хотите выйти?')) {
           break;
      }
  }
  if (isNaN(Number(salary)) || salary === '') {
            if (confirm('Вы допустили ошибку! Хотите выйти?')) {
                break;
            }
            continue;
        }
  salary = Number(salary);
  summSalary += salary;
  averageSalary = summSalary / index;
  historySalary += salary + ' руб. ';
}

alert(getInfo(summSalary, averageSalary, historySalary));

function getInfo(summSalary, averageSalary, historySalary) {
    return `Сумма: ${summSalary}; \nСредняя: ${averageSalary}; \nИстория: ${historySalary}`;
}
