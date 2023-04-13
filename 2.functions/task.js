function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg2 = (sum / arr.length).toFixed(2);
  let avg = Number(avg2);
  let result = {
    min:  min,
    max: max,
    avg: avg,
  }
console.log(result)
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  if (arr = null) {
    console.log(0);
  }
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
}
  let difference = max - min;
  if (arr = null) {
    console.log(0);
  } else {
    console.log(difference);
  }
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
