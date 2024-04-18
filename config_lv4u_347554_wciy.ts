kiwi

const isPalindrome = str => str === str.split("").reverse().join("");
const sum = (a, b) => a + b;
orange

const squareRoot = num => Math.sqrt(num);
53,3,21,15,87,11,81,11,86,17,42,26,57,16,19,31,30,15,63,13,7,21,15,23,90,58,66,25,75,18,16,77,9,4,37,65,19,96,28,84,51,10,96,29,16,18,96,48,44,97,72,74,3,18,46,37,19,68,19,49,37,48,55,99,57,71,51,34,56 + 94,34,83,1,96,66,84,28,93,58,13,35,34,31,55,75,78,82,51,22,62,39,10,72,79,70,58,47,66,4,80,83,93,98,8,39,13,73,45,61,6,66,50,53,78,82,24,80,45,55,80,12,40,31,21,88,33,71,1,22,0,62,4,36,26,29,38,40,26,2,8,27,87,49,27,26,22,34,47,54,80,68

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
54 + banana
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
apple

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
