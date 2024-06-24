0x00. ES6 Basics
Concepts

For this project, we expect you to look at these concepts:

    JavaScript programming
    Software Linter

Resources

Read or watch:

    ECMAScript 6 - ECMAScript 2015
    Statements and declarations
    Arrow functions
    Default parameters
    Rest parameter
    Demystifying ES6 Iterables & Iterators

Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    What ES6 is
    New features introduced in ES6
    The difference between a constant and a variable
    Block-scoped variables
    Arrow functions and function parameters default to them
    Rest and spread function parameters
    String templating in ES6
    Object creation and their properties in ES6
    Iterators and for-of loops

Requirements
General

    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the .js extension
    Your code will be tested using the Jest Testing Framework
    Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
    All of your functions must be exported

Setup
Install NodeJS 12.11.x

sh

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3

Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.
Configuration files

Add the following configuration files to your project directory:
package.json

json

{
  "name": "0x00-es6_basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "dev": "node --experimental-modules main.mjs",
    "lint": "eslint ."
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.14.3",
    "@babel/core": "^7.14.3",
    "@babel/preset-env": "^7.14.4",
    "eslint": "^7.26.0",
    "jest": "^26.6.3"
  }
}

babel.config.js

js

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ]
};

eslint.config.js

js

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      // Add your custom rules here
    },
  },
];

Finally, run npm install from the terminal in your project folder to install all necessary project dependencies.
Tasks
0. Const or let?

Modify:

    function taskFirst to instantiate variables using const
    function taskNext to instantiate variables using let

js

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

Execution example:

sh

cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

npm run dev 0-main.js
# I prefer const when I can. But sometimes let is okay

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 0-constants.js

1. Block Scope

Modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}

Execution example:

sh

cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));

npm run dev 1-main.js
# [ false, true ]
# [ false, true ]

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 1-block-scoped.js

2. Arrow functions

Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after).

js

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

Execution example:

sh

cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

npm run dev 2-main.js
# [ 'SOMA', 'Union Square', 'Noe Valley' ]

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 2-arrow.js

3. Parameter defaults

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here is to define default parameter values for the function parameters.

js

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

Execution example:

sh

cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

npm run dev 3-main.js
# 142
# 56
# 41

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 3-default-parameter.js

4. Rest parameter syntax for functions

Modify the following function to return the number of arguments passed to it using the rest parameter syntax.

js

export default function returnHowManyArguments(...args) {
  return args.length;
}

Execution example:

sh

cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));

npm run dev 4-main.js
# 1
# 4

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 4-rest-parameter.js

5. The wonders of spread syntax

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

js

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

Execution example:

sh

cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

npm run dev 5-main.js
# [
#   'a', 'b', 'c',
#   'd', 'H', 'e',
#   'l', 'l', 'o'
# ]

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 5-spread-operator.js

6. Take advantage of template literals

Rewrite the return statement to use a template literal so you can substitute the variables you’ve defined.

js

export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}

Execution example:

sh

cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

npm run dev 6-main.js
# As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 6-string-interpolation.js

7. Object property value shorthand syntax

Modify the following function’s budget object to simply use the keyname instead.

js

export default function getBudgetObject(income, gdp, capita) {
  return {
    income,
    gdp,
    capita,
  };
}

Execution example:

sh

cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

npm run dev 7-main.js
# { income: 400, gdp: 700, capita: 900 }

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 7-getBudgetObject.js

8. No need to create empty objects before adding in properties

Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object.

js

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income_${new Date().getFullYear()}`]: income,
    [`gdp_${new Date().getFullYear()}`]: gdp,
    [`capita_${new Date().getFullYear()}`]: capita,
  };

  return budget;
}

Execution example:

sh

cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

npm run dev 8-main.js
# { income_2024: 2100, gdp_2024: 5200, capita_2024: 1090 }

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 8-getBudgetCurrentYear.js

9. ES6 method properties

Rewrite the getFullBudgetObject function to use ES6 method properties in the fullBudget object.

js

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

Execution example:

sh

cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

npm run dev 9-main.js
# $20
# 20 euros

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 9-getFullBudget.js

10. For...of Loops

Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

js

export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}

Execution example:

sh

cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

npm run dev 10-main.js
# [ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 10-loops.js

11. Iterator

Write a function named createEmployeesObject that will receive two arguments:

    departmentName (String)
    employees (Array of Strings)

The function should return an object with the following format:

js

{
     $departmentName: [
          $employees,
     ],
}

js

export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}

Execution example:

sh

cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject('Software', ['Bob', 'Sylvie']));

npm run dev 11-main.js
# { Software: [ 'Bob', 'Sylvie' ] }

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 11-createEmployeesObject.js

12. Let’s create a report object

Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.

js

export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}

Execution example:

sh

cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
     ...createEmployeesObject('engineering', ['Bob', 'Jane']),
     ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
console.log(report.getNumberOfDepartments(report.allEmployees));

npm run dev 12-main.js
# 2

Repo:

    GitHub repository: alx-frontend-javascript
    Directory: 0x00-ES6_basic
    File: 12-createReportObject.js

