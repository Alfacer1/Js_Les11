// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
  }


  
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * 27;
    console.log(`${dollars} доларів = ${uah} гривень`);
  }



// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const N = 10;
for (let i = 1; i <= 100; i++) {
  const square = i * i;
  if (square <= N) {
    console.log(i);
  }
}


// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const num = 13;
  if (isPrime(num)) {
    console.log(`${num} є простим числом.`);
  } else {
    console.log(`${num} не є простим числом.`);
  }




// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
  function isPowerOfThree(number) {
    return number > 0 && Math.log10(number) / Math.log10(3) % 1 === 0;
  }
  
  const num = 27;
  if (isPowerOfThree(num)) {
    console.log(`${num} можна отримати зведенням числа 3 у деякий ступінь.`);
  } else {
    console.log(`${num} не можна отримати зведенням числа 3 у деякий ступінь.`);
  }