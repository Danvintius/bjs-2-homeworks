"use sctrict";

function solveEquation(a,b,c) {
  let arr = [];
  let d = Math.pow(b,2) -4 * a * c;
  if (d < 0) {
    arr = [];
    console.log(arr);
  }
  if (d == 0) {
    arr[0] = -b/(2*a);
    console.log(arr);
  }
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d,2))/(2*a);
    arr[1] = (-b - Math.sqrt(d,2))/(2*a);
    console.log(arr);
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}