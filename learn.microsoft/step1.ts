/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + ' ' + lastName;

if (ukCitizen) {
  console.log(
    'My name is ' +
      fullName +
      ", I'm " +
      age +
      ", and I'm a citizen of the United Kingdom."
  );
} else {
  console.log(
    'My name is ' +
      fullName +
      ", I'm " +
      age +
      ", and I'm not a citizen of the United Kingdom."
  );
}

/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

// let x;
// let y;
// let a;

// x = 'five';
// y = 7;
// a = x + y;

// console.log(a);

let x: number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

enum Season {
  Fall,
  Winter,
  Spring,
  Summer,
}
function whichMonths(season: Season): string {
  let monthsInSeason: string;
  switch (season) {
    case Season.Fall:
      monthsInSeason = 'September to November';
      break;
    case Season.Winter:
      monthsInSeason = 'December to February';
      break;
    case Season.Spring:
      monthsInSeason = 'March to May';
      break;
    case Season.Summer:
      monthsInSeason = 'June to August';
  }
  return monthsInSeason;
}
console.log(whichMonths(Season.Fall));

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

let randomNumbers: number[] = [];
let nextNumber: number;

for (let i = 0; i < 10; i++) {
  nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  randomNumbers.push(nextNumber);
}

console.log(randomNumbers);

interface IceCream {
   flavor: string;
   scoops: number;
   instructions?: string;
}

interface Sundae extends IceCream {
  sauce?: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

//console.log(myIceCream.flavor);

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 2, sauce: 'caramel'}));

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream1: IceCreamArray;
myIceCream1 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream1[0];
console.log(myStr);

const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}
async function showPost() {
  let posts = await fetchPosts(fetchURL);
  // Display the contents of the first item in the response
  let post = posts[0];
  console.log('Post #' + post.id);
  // If the userId is 1, then display a note that it's an administrator
  console.log(
    'Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString())
  );
  console.log('Title: ' + post.title);
  console.log('Body: ' + post.body);
}

showPost();