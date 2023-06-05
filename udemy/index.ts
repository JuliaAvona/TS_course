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

//const userData = '{"isBirthdayDate": true, "ageDate": 40, "nameDate": "Ivan Jonson"}';

// const userObj: {
//   isBirthdayDate: boolean;
//   ageDate: number;
//   nameDate: string;
// } = JSON.parse(userData);

function logHB(isBirthday: boolean, age: number, name: string): string {
  if (isBirthday) {
    return `Happy birthday ${name.toLocaleUpperCase()}. Today you are ${
      age + 1
    } years old!`;
  } else {
    return 'Error';
  }
}

//isBirthday: any - has 'any' type
//function logHB(isBirthday: boolean, age: number, name: string): void
// void - function returns nothing
logHB(isBirthdayDate, ageDate, nameDate);

// const arrowLogHB = (isBirthday: boolean, age: number, name: string) => {
//   if (isBirthday) {
//     return `Happy birthday ${name.toLocaleUpperCase()}. Today you are ${
//       age + 1
//     } years old!`;
//   } else {
//     createError('Error');
//   }
// };

//ANY - type

//Lesson 11
//NEVER - type - example1: function returns nothing: const createError: (msg: string) => never
const createError = (msg: string) => {
  //const createError: (msg: string) => never
  throw new Error(msg);
};

//NEVER - type - example2: function returns nothing: const infinityFunc: (msg: string) => never
const infinityFunc = (i: number) => {
  i = 0;
  while (true) {
    i++;
  }
};

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
  if (Math.random() < 0.5) {
    return null;
  } else {
    return '   Some data    ';
  }
}

const data = getRndData();
const trimmedData = data ? data.trim() : undefined;

//Lesson 13 - bigint, symbol
let id: symbol = Symbol('id');
const idObj = {
  [id]: 111,
};
console.log(idObj[id]);

const bidInum1: bigint = 1n;
const bidInum2: bigint = 9n;
console.log(bidInum1 + bidInum2);

//Lesson 14 - Object typing and destructuring
const userData = {
  isBirthdayDate: true,
  ageDate: 40,
  nameDate: 'Julia',
  message: {
    error: 'Error',
  },
};

function logHBmassage({
  isBirthdayDate,
  ageDate,
  nameDate,
  message: { error },
}: {
  isBirthdayDate: boolean;
  ageDate: number;
  nameDate: string;
  message: { error: string };
}): string {
  if (isBirthdayDate) {
    return `Happy birthday Dear ${nameDate.toLocaleUpperCase()}. Today you are ${
      ageDate + 1
    } years old!`;
  } else {
    return createError('Error');
  }
}

console.log(logHBmassage(userData));

//Lesson 15 - Array typing
const departments: string[] = ['dev', 'design', 'marketing'];
const nums: number[] = [1, 4, 90];
const anytypes: any[] = [4, 22, 9240, 'dev', 'design', 'marketing'];
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [1, 2, 3],
];
const report = departments
  .filter((d: string) => d !== 'dev')
  .map((d: string) => d + ' - done!');
console.log(report);
const [first] = report;
console.log(first);

//17. Tuples
const users: [boolean, string, number] = [true, 'hello', 123];
users.push(true);
console.log(users); //[ true, 'hello', 123, true ]
//console.log(users[4]); //error
const [isBirthday, greeting, dateNum] = users;
console.log(isBirthday, greeting, dateNum);

//spread/rest operator for array expansion
const users1: [boolean, string, number, ...string[]] = [
  true,
  'hello',
  123,
  'rrr',
  'www',
  'qqq',
];

//18. Union
const numberFirst: string | number = '12313';
const unionArr: number[] | string[] = [12, 123, 122];

// function printMassage(massage: string | number): void {
//   console.log(massage);
// }
// printMassage('123');
// printMassage(123);

//19. Type narrowing (Narrowing)
function printMassage(msg: string | number): void {
  if (typeof msg === 'string') {
    console.log(msg.toLowerCase());
  } else {
    console.log(msg.toExponential());
  }
}

function printreading(a: number | string, b: number | boolean): void {
  if (a === b) {
    //if a, b - numbers
    console.log(a + b);
  }
}

function printreading2(a: number[] | string): void {
  console.log(a.slice(0, 2));
}

function printreading3(reading: { system: number } | { user: number }): void {
  if ('system' in reading) {
    console.log(reading.system);
  } else {
    console.log(reading.user);
  }
}

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(Date);
  } else {
    console.log(x);
  }
}

//20. Primitive Literal Types
/**
A literal is a more concrete sub-type of a collective type. 
What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.
There are three sets of literal types available in TypeScript 
today: strings, numbers, and booleans; by using literal types you can allow an exact value which a 
string, number, or boolean must have.
 */

let msg: 'Hello!' = 'Hello!';
//msg = 'Hola!'; Type '"Hola!"' is not assignable to type '"Hello!"

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started!' {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error('Invalid port!');
  }
  return 'Server started!';
}

startServer('https', 3000);

function createAnimation(
  id: string | number,
  animName: string,
  duration: number,
  timingFunc:
    | 'ease'
    | 'ease-out'
    | 'ease-in' = 'ease' /*timingFunc = 'ease': string - not correct*/,
  iterCount: 'infinite' | number
): void {
  // const elem = document.querySelector('#${id}') as HTMLAreaElement;
  // if (elem) {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
  //   elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
  // }
}

createAnimation('id', 'fade', 5, 'ease', 'infinite');
