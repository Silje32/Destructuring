const toybox = ["teddy", "dinosaur", "robot"];

// Rest Operator(...)
// Når vi pakker ut et array har det ingenting å si hva variablene heter.
// Rekkefølgen er viktig.
const [firstToy, secondToy, thirdToy] = toybox;
console.log(firstToy, secondToy, thirdToy);

//Object
const person = { name: "Sander", age: 23 };

// Hvordan kan vi pakke ut et persons object?
// Variabelen må hete det samme som key.
// Key er viktig.
const { name, age } = person;
console.log(name, age);

/* SPREAD OPERATOR */
// Kopierer en liste. Henter dataene.
// Spread operatoren skal være først i arrayet.
// unicorn og dragon blir lagt til arrayet.
const newToybox = [...toybox, "unicorn", "dragon"];
console.log(newToybox);

/* REST OPERATOR WITH ARRAY */
//Hvis du ønsker første leketøyet eller det du har pakket ut og RESTEN (...rest)
// Vi får et nytt array. Vi lager et array.
const [firstToy, ...otherToys] = toybox;
console.log(firstToy, secondToy, thirdToy);

/* REST OPERATOR WITH OBJECT */
// Key gjelder i obj, ikke rekkefølge.
const person = {
  name: "Sander",
  age: 23,

  //rest: otherDetails
  eyeColor: "brown",
  hairColor: "brown",
  footSize: 42,
  height: 182,
  gender: "male",
  country: "Norway",
};

const { firstName, lastName, age, ...otherDetails } = person;
console.log(
  "firstname:",
  firstName,
  "lastname",
  lastName,
  "otherDetails:",
  otherDetails
);

const { eyeColor, hairColor, ...rest } = otherDetails;

// Challenge: Pakk ut [...];
const foods = ["apple", "bread", "banana"];
// Når du pakker ut et array

const foodShelf = [
  ["loff", "grovbrød", "juliusbrød"],
  ["litago", "boller", "hveteboller"],
  ["freia kjeks", "bixit", "sjokoladeterapi", "oreo", "safari"],
];

/* NESTED DESTRUCTURING */
// Pakk ut et array med flere arrays.
// [], [], []
const [
  [bread1, bread2, bread3],
  [bun1, bun2],
  [cookie1, cookie2, cookie3, cookie4, cookie5],
] = foodShelf;


/* DEFAULT VALUES */
const ["Sander", "Erik", "Jonas", "Kristoffer" ];

const [
    personOne = "Elida", 
    personTwo = "Line", 
    personThree = "Sofie",
    personFour = "Hanna"
] = names;
const [ personOne, personTwo, personThree, personFour ] = names;
console.log(personOne, personTwo, personThree, personFour);


// Objecter


const employees = {
employeeOne: {
    "location": "Bergen", 
}, 
employeeTwo: {
    "location": "Oslo", 
}, 
employeeThree: {
    "location": "Ålesund", 
},
employeeFour: {
    "location": "undefined"
}
}


