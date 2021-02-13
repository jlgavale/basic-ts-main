/* 
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead 
of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three 
and five print “FizzBuzz”.
*/

// for (let i = 1; i <= 100; i++) {
//   const fizz = i % 3 == 0,
//     buzz = i % 5 == 0;
//   console.log(fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : i);
// }

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

for (let j = 1; j <= 100; j++) {
  let resultado: string;
  const fizzn: number = j % 3;
  let fizz: boolean;
  if (fizzn == 0) {
    fizz = true;
  } else {
    fizz = false;
  }
  const buzzn: number = j % 5;
  let buzz: boolean;
  if (buzzn == 0) {
    buzz = true;
  } else {
    buzz = false;
  }
  if (fizz && buzz) {
    resultado = "fizzbuzz";
  } else if (fizz) {
    resultado = "fizz";
  } else if (buzz) {
    resultado = "buzz";
  } else {
    resultado = j.toString();
  }
  console.log(resultado);
}
