let firstMonth = prompt("Your salary for the first month of work", '1');

let secondMonth = prompt("Your salary for the second month of work", '2');

let sumSalary = +firstMonth + +secondMonth;

alert(`You have extra bonus! Your total salary was: ${sumSalary}$ it's increase for 1$ and now it is: ${++sumSalary}$`);

let keepWorking = sumSalary >= 2000 ? 'I\`m out' : 'I\'m ready to work';
alert(`${keepWorking}`);20002