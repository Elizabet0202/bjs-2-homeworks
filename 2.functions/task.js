'use strict';

/**
 * Задача 1
 * Возвращает min, max и среднее (avg) по переданным числам
 */
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (const el of arr) {
    if (el < min) min = el;
    if (el > max) max = el;
    sum += el;
  }

  const avg = +((sum / arr.length).toFixed(2));
  return { min, max, avg };
}

/**
 * Задача 2
 * Насадка 1: сумма элементов
 */
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  for (const el of arr) sum += el;
  return sum;
}

/**
 * Задача 2
 * Насадка 2: разница max и min
 */
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

/**
 * Задача 2
 * Насадка 3: разница сумм чётных и нечётных
 * (чётные - нечётные)
 */
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const el of arr) {
    // Для отрицательных чисел тоже ок:
    // -3 % 2 = -1, поэтому проверяем "не равно 0"
    if (el % 2 === 0) {
      sumEvenElement += el;
    } else {
      sumOddElement += el;
    }
  }

  return sumEvenElement - sumOddElement;
}

/**
 * Задача 2
 * Насадка 4: среднее значение чётных элементов
 */
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
      countEvenElement += 1;
    }
  }

  if (countEvenElement === 0) return 0;

  return sumEvenElement / countEvenElement;
}

/**
 * Задача 3
 * "Мясорубка": принимает массив массивов и насадку,
 * возвращает максимальный результат насадки
 */
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
