// Use the keyword class to create a class.
// Always add a method named constructor()

// A JavaScript class is not an object.
// It is a template for JavaScript objects.
// Class Methods()
// Class methods are created with the same syntax as object methods.
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.
// Syntax
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
// }
//How to use class funtion in JS

class Car {
    constructor(name, year) {
      // this.name = name;
      // this.year = year;
      console.log(name, year)
    }
  }    //The example above creates a class named "Car". 
       //The class has two initial properties: "name" and "year".
       //Using a Class
       //When you have a class, you can use the class to create objects:
//The constructor method is called automatically when a new object is created.
// The Constructor Method
// The constructor method is a special method:
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.
       
let Car1 = new Car("Ford", 2018)
let Car2 = new Car("Audi", 2019);
let Car3 = new Car("BMW", 2022)




  class printName {
    constructor(n) {
        this.name = n;
        console.log(this.name)
    }
    buy() {
        console.log("hi")
    }
}
const newName = new printName("Javed");  //Creating Object of class
newName.buy()


class Car5 {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car5("Ford", 2014);

console.log("My car is",myCar.age(),"years old")

class Car4 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
// console.log(date)
let year = date.getFullYear();
// console.log(year)

let myCar5 = new Car4("Ford", 2014);
console.log("My Car is",myCar5.age(year), "years old")

//   function Sum(x = 0, y = 0) {
      //     return x + y;
      //   }
      //   console.log(Sum(4, 7));

      
    // How to use class in JS

    //   class Customer {
    //     constructor(n) {
    //         this.name = n;
    //         console.log(this.name)
    //     }
    //     buy() {
    //         console.log("Hello")
    //     }
    //   }
    //   const x = new Customer("Parvez")   // creating object of class
    //   x.buy()
    

