/* 
  Homework 5 Question 1
*/

class Square {
   constructor(side) {
      this.side = side;
   }

   perimiter() {
      return this.side * 4;
   }

   area() {
      return this.side ** 2;
   }

   diagonal() {
      return Math.sqrt(2 * this.side ** 2);
   }

   describe() {
      console.log(`Square with side ${this.side} has a perimiter of ${this.perimiter()}, area of ${this.area()}, and diagonal of ${Math.round(this.diagonal() * 1000) / 1000}`);
   }
}

let square1 = new Square(2);
square1.describe();

let square2 = new Square(5);
square2.describe();

let square3 = new Square(7);
square3.describe();