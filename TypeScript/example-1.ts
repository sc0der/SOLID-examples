
// 1 - Принцип единственной ответственности (Single responsibility principle-SRP)


// --------------------------- False ----------------------

// class Person {
//     public name : string;
//     public surname : string;
//     public email : string;
//     constructor(name : string, surname : string, email : string){
//         this.surname = surname;
//         this.name = name;
//         if(this.validateEmail(email)) {
//           this.email = email;
//         }
//         else {
//             throw new Error("Invalid email!");
//         }
//     }
//     validateEmail(email : string) {
//         var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//         return re.test(email);
//     }
//     greet() {
//         alert("Hi!");
//     }
// }

// --------------------------- True ----------------------
class Email {
    public email : string;
    constructor(email : string){
        if(this.validateEmail(email)) {
          this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }        
    }
    validateEmail(email : string) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
}

class Person {
    public name : string;
    public surname : string;
    public email : Email;
    constructor(name : string, surname : string, email : Email){
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    greet() {
        alert("Hi!");
    }
}
// ---------------------------------------------------
// 2 - Принцип открытости/закрытости (Open-closed principle - OCP)
// --------------------------- False ----------------------
// class Rectangle {
//     public width: number;
//     public height: number;
// }

// class Circle {
//     public radius: number;
// }

// function getArea(shapes: (Rectangle|Circle)[]) {
//     return shapes.reduce(
//         (previous, current) => {
//             if (current instanceof Rectangle) {
//                 return current.width * current.height;
//             } else if (current instanceof Circle) {
//                 return current.radius * current.radius * Math.PI;
//             } else {
//                 throw new Error("Unknown shape!")
//             }
//         },
//         0
//     );
// }

// --------------------------- True ----------------------
interface Shape {
    area(): number;
}

class Rectangle implements Shape {

    public width: number;
    public height: number;

    public area() {
        return this.width * this.height;
    }
}

class Circle implements Shape {

    public radius: number;

    public area() {
        return this.radius * this.radius * Math.PI;
    }
}

function getArea(shapes: Shape[]) {
    return shapes.reduce(
        (previous, current) => previous + current.area(),
        0
    );
}
// ------------------------------------------------
// 3-Принцип подстановки Барбары Лисков (Liskov substitution principle - LSP)
// function getArea(shapes: Shape[]) {
//     return shapes.reduce(
//         (previous, current) => previous + current.area(),
//         0
//     );
// }