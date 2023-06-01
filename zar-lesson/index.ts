//Basic Typescript for 19 minutes - ZarZacharov - https://www.youtube.com/watch?v=ahntAVi3GM4
const stringOrNumberFirst: string | number = '12313'; //2 types string or number - 'Union Types'

type stringOrNumber = string | number; //declarete type alliase

const stringOrNumber1: stringOrNumber = '12313'; //use type stringOrNumber
const stringOrNumber2: stringOrNumber = 234243;
const stringOrNumber3: stringOrNumber = '123123';
const stringOrNumber4: stringOrNumber = 123131;

//arrays
const arr: number[] = [1, 5, 90]; // arrays with numbers
const tsArr: (string | number)[] = [1, 5, 90, 'qeqewqw'];

const tsArr1: Array<stringOrNumber> = [1, 5, 90, 'qeqewqw']; //equal notacion
const tsArr2: stringOrNumber[] = [1, 5, 90, 'qeqewqw']; //equal notacion
const tsNextArr: [string, number] = ['1', 2]; // arr with fix length and types

//array destructuring
const [a, b] = tsNextArr; //array destructuring
console.log(b); //array destructuring

//Objects
type tsObject = {
  //alliase tsObject
  name: string;
  birthday: number | string;
  male?: string; //male? - optional field, can be omitted
};

//Create Interface
interface MyFirstInterface {
  readonly name: string;
  birthday: number | string;
  male?: string;
}
//propierty readonly - only for reading - not change

const tsObject: tsObject = {
  name: 'Julia',
  birthday: 20,
};

interface IndexInterface {
  [n: string]: number | string;
}

const data: IndexInterface = {
  key1: 'key',
  key2: 'key',
};

const val3 = data.key3;

function calculate(method: string, first: number, second: number): number {
    switch (method) {
        case 'add': return first + second;
        default: return 0
    }
}
