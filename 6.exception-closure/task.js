﻿function parseCount(a) {
  let b = Number.parseFloat(a);
  if (isNaN(b)) {
    throw new Error("Невалидное значение");
  }
  return b;
}

function validateCount(a) {
  try {
    return parseCount(a);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
    throw new Error("Треугольник с такими сторонами не существует")
  }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter / 2;
    return Number((+Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c))).toFixed(3));
  }
}

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c)
  } catch {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }
  } finally {
    
  }
}