/*
Napište funkci createAccount, která se bude tvářit, že zakládá nový uživatelský účet. 
Funkce bude mít dva parametry user a generatePassword. První bude uživatelské jméno a druhý bude funkce, 
pomocí které se má vygenerovat heslo pro tento účet. Funkce createAccount vrátí řetězec, 
který bude obsahovat jméno uživatele a heslo vygenerované voláním funkce generatePassword. 
Funkci generatePassword při volání předejte číslo 9 jako délku hesla.

Na konci javascriptového kódu vyzkoušejte založit více různých účtů s různými typy hesel. Například:

document.body.innerHTML += `
	<p>${createAccount('Míša', weakPassword)}</p>
	<p>${createAccount('Řízek', mediumPassword)}</p>
	<p>${createAccount('Mápodčepicí', strongPassword)}</p>
`;
by mělo vepsat do stránky něco jako:

Uživatel Míša s heslem 012345678
Uživatel Řízek s heslem 074031827
Uživatel Mápodčepicí s heslem mwwf9epts */


const createAccount = (user, generatePassword) => {
      const password = generatePassword(9); 
      return `${user}: ${password}`;
  };

  
const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};

document.body.innerHTML += `
	<p>${createAccount('Míša', weakPassword)}</p>
	<p>${createAccount('Řízek', mediumPassword)}</p>
	<p>${createAccount('Mápodčepicí', strongPassword)}</p>
`;


/* As to why this code works.. 
The code works because generatePassword is not a separately defined function in your code. 
Instead, it's treated as a parameter of the createAccount function.
In JavaScript, functions are first-class citizens, which means they can be passed as arguments to other functions. 
In this case, generatePassword is expected to be a function that generates a password. 
When you call createAccount, you pass a function (weakPassword, mediumPassword, or strongPassword) as the generatePassword argument.

For example, when you call createAccount('user', weakPassword), it effectively becomes:

const password = weakPassword(9); 

The generatePassword parameter inside createAccount then acts as a reference to the function you passed in. 
So, you can use it as if it were a regular function.
This is a common pattern in JavaScript, especially in functional programming and when using callbacks or higher-order functions.*/