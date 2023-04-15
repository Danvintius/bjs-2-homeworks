"use sctrict";

function solveEquation(a,b,c) {
  let arr = [];
  let d = Math.pow(b,2) -4 * a * c;
  if (d < 0) {
    arr = [];
    return arr;
  }
  if (d == 0) {
    arr[0] = -b/(2*a);
    return arr;
  }
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d,2))/(2*a);
    arr[1] = (-b - Math.sqrt(d,2))/(2*a);
    return arr;
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (percent > 0 && percent <= 100) {
    let P = percent / 100 / 12;
    let S = amount - contribution;
    let monthPay= S * (P + (P / ((Math.pow(1 + P, countMonth)) - 1)));
    let result = Number((monthPay * countMonths).toFixed(2));
    return result;
  } else {
    return false;
  }
}