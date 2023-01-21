# Project Name
**0x00. ES6 Basics**

## Author's Details
Name: *Wendy Munyasi.*

Email: *wendymunyasi@gmail.com*

Tel: *+254707240068.*

##  Requirements

### JavaScript Scripts
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
*   All your files will be interpreted on Ubuntu 20.04 LTS using `node` (version 14.x).
*   All your files should end with a new line.
*   The `main.js` files are used to test your functions, but you don’t have to push them to your repo.
*   Your code will be tested using the [Jest Testing Framework](https://jestjs.io/).
*   Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that will be provided.
*   All of your functions must be exported.

## Project Description
Learn what ES6 is.
New features introduced in ES6.
The difference between a constant and a variable.
Block-scoped variables.
Arrow functions and function parameters default to them.
Rest and spread function parameters.
String templating in ES6.
Object creation and their properties in ES6.
Iterators and for-of loops.

## More Info
### Install Node 14
```
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

### Install Jest, Babel, and ESLint
```
$ npm install --save-dev jest
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
$ npm install --save-dev eslint
```

**Find the configuration files `package.json`, `babel.config.js` and `.eslintrc.js` in the project directory. Run `npm install` when you have the `package.json`**


* **0. Const or let?** - Modify function `taskFirst` to instantiate variables using `const` and function `taskNext` to instantiate variables using `let`. - `0-constants.js`.
* **1. 1. Block Scope** - Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block. - `1-block-scoped.js`.
* **2. Arrow functions** - Rewrite the given standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after). - `2-arrow.js`.
* **3. Parameter defaults** - Condense the internals of the given function to 1 line - without changing the name of each function/variable. - `3-default-parameter.js`.
* **4. Rest parameter syntax for functions** - Modify the given function to return the number of arguments passed to it using the rest parameter syntax. - `4-rest-parameter.js`.
* **5. The wonders of spread syntax** - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long. - `5-spread-operator.js`.
* **6. Take advantage of template literals** - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined. - `6-string-interpolation.js`.
* **7. Object property value shorthand syntax** - Modify the given function’s `budget` object to simply use the keyname instead. - `7-getBudgetObject.js`.
* **8. No need to create empty objects before adding in properties** - Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object. - `8-getBudgetCurrentYear.js`.
* **9. ES6 method properties** - Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object. - `9-getFullBudget.js`.
* **10. For...of Loops** - Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly. - `10-loops.js`.
* **11. Iterator** - Write a function named `createEmployeesObject` that will receive two arguments. - `11-createEmployeesObject.js`.
* **12. Let's create a report object** - Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`. - `12-createReportObject.js`.
* **13. Iterating through report objects** - Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`. - `100-createIteratorObject.js`.
* **14. Iterate through object** - Write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`. - `101-iterateThroughObject.js`.


## Collaborate

To collaborate, reach me through my email address wendymunyasi@gmail.com.
