// LEsson 6-7-8

let userName: string = 'Julia';
let password: number = 123131231;
let email: boolean = false;

console.log(userName);

userName = 'Alex';

// string - "", '', ``;
// number - 10, 0.5, 0.00000002, 10e34, -45
// boolean - true, false

const isBirthdayDate: boolean = true;
const ageDate: number = 40;
const nameDate: string = 'Ivan Jonson';

//JSON

const userData = '{"isBirthdayDate": true, "ageDate": 40, "nameDate": "Ivan Jonson"}';

const userObj: {
  isBirthdayDate: boolean, ageDate: number, nameDate: string
} = JSON.parse(userData);

function logHB (isBirthday: boolean, age: number, name: string): string {
  if (isBirthday) {
    return `Happy birthday ${name.toLocaleUpperCase()}. Today you are ${age + 1} years old!`;
  } else {
    return 'Error';
  }
}

//isBirthday: any - has 'any' type
//function logHB(isBirthday: boolean, age: number, name: string): void
// void - function returns nothing
logHB (isBirthdayDate, ageDate, nameDate);

const arrowLogHB = (isBirthday: boolean, age: number, name: string): string => {
  if (isBirthday) {
    return `Happy birthday ${name.toLocaleUpperCase()}. Today you are ${age + 1} years old!`;
  } else {
    return 'Error';
  }
}

//ANY - type
