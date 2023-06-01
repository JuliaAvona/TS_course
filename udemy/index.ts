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

function logHB(isBirthday: boolean, age: number, name: string): string {
  if (isBirthday) {
    return `Happy birthday ${name.toLocaleUpperCase()}. Today you are ${age + 1} years old!`;
  } else {
    return 'Error';
  }
}

//isBirthday: any - has 'any' type
//function logHB(isBirthday: boolean, age: number, name: string): void
// void - function returns nothing
logHB(isBirthdayDate, ageDate, nameDate);

const arrowLogHB = (isBirthday: boolean, age: number, name: string) => {
  if (isBirthday) {
    return `Happy birthday ${name.toLocaleUpperCase()}. Today you are ${age + 1} years old!`;
  } else {
    createError('Error');
  }
}

//ANY - type

//Lesson 11
//NEVER - type - example1: function returns nothing: const createError: (msg: string) => never
const createError = (msg: string) => { //const createError: (msg: string) => never
  throw new Error(msg);
}

//NEVER - type - example2: function returns nothing: const infinityFunc: (msg: string) => never
const infinityFunc = (i: number) => {
  i = 0;
  while (true) {
    i++;
  }
}

//Lesson 12 - types null и undefined
// null - completely absent
// undefined - it's there, but it's not defined

//The Null type is a subtype of all types except for the Undefined type,
//so its single null value is compatible with all other data types.

// class TypeSystem {
//   static any: any = null; // Ok
//   static number: number = null; // Ok
//   static string: string = null; // Ok
//   static boolean: boolean = null; // Ok
//   static null: null = null; // Ok
// }

// Turn Of - // "strictNullChecks": true, in tsconfig.json - and we don't see this mistake 
// While the null type is compatible with all types other than itself,
// only undefined and any types are compatible with it.

const test: null = null;
const test2: any = null;


function getRndData() {
    if(Math.random() < 0.5) {
      return null;
    } else {
      return "   Some data    ";
    }
}

const data = getRndData();
const trimmedData = data ? data.trim() : undefined;
