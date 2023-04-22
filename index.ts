let userName: string = 'Julia';
let password: number = 123131231;
let email: boolean = false;

console.log(userName);

userName = 'Alex';

// string - "", '', ``;
// number - 10, 0.5, 0.00000002, 10e34, -45
// boolean - true, false

const isBirthday: boolean = true;
const age: number = 40;
const newName: string = 'John';

if (isBirthday) {
  console.log(`Happy birthday ${newName.toLocaleUpperCase()}. Today you are ${age + 1} years old!`);
}