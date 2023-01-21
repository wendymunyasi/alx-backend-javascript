# Project Name
**0x01. ES6 Promises**

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
Learn about Promises (how, why, and what).
How to use the `then`, `resolve`, `catch` methods.
How to use every method of the Promise object.
Throw / Try.
The await operator.
How to use an `async` function.

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


* **0. Keep every promise you make and only make promises you can keep** - Return a Promise using this prototype function `getResponseFromAPI()`. - `0-promise.js`.
* **1. Don't make a promise...if you know you can't keep it** - Using the prototype given, return a promise. The parameter is a boolean. - `1-promise.js`.
* **2. Catch me if you can!** - Using the function prototype given, append three handlers to the function and resolve the promise. - `2-then.js`.
* **3. Handle multiple successful promises** - Import `uploadPhoto` and `createUser` from `utils.js`and use the given prototype to collectively resolve all promises and log `body firstName lastName` to the console. - `3-all.js`.
* **4. Simple promise** - Using the given prototype return a resolved promise with the given object. - `4-user-promise.js`.
* **5. Reject the promises** - Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string). - `5-photo-reject.js`.
* **6. Handle multiple promises** - Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the given structure. - `6-final-user.js`.
* **7. Load balancer** - Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise). - `7-load_balancer.js`.
* **8. Throw error / try catch** - Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number). - `8-try.js`.
* **9. Throw an error** - Write a function named `guardrail` that will accept one argument `mathFunction` (Function). - `9-try.js`.
* **10. Await / Async** - Import `uploadPhoto` and `createUser` from `utils.js`. Write an async function named `asyncUploadUser` that will call these two functions and return an object with the given format. - `100-await.js`.


## Collaborate

To collaborate, reach me through my email address wendymunyasi@gmail.com.
