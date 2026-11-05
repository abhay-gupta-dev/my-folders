//factory function to create student objects
// Each student object has name, age and a greet method
// Example usage provided at the end
//but without using classes 
//but this is not suitable method when we have large number of objects to create this creates different copy of greet method for each object

function MakestudentCard(name,age){
    const student={
        name:name,
        age:age,
        greet:function(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        },
    };
    return student;
}
// const s1=MakestudentCard('Alice',20);
// s1.greet();

// const s2=MakestudentCard('Bob',22);
// s2.greet();

// const s3=MakestudentCard('Charlie',23);
// s3.greet();

// const s4=MakestudentCard('Diana',21);
// s4.greet();
//--------------------------------------------------------------------------------------------------


// now we are using new operator to create objects
// but without using classes 
// using constructor function
// Example usage provided at the end
// now all objects share the same greet method
//constructor starts with capital letter and doesn't return anything
// instead it uses 'this' keyword to set properties and methods 

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`);
}

// let p1=new Person('Eve',24);
// let p2=new Person('ramesh',24);


//now we are coming to classes
// classes are syntactical sugar over constructor functions
// Example usage provided at the end
// classes provide a cleaner and more intuitive syntax for creating objects and handling inheritance

class Persons{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// let pp1=new Persons('Frank',25);
// let pp2=new Persons('Grace',26);


//now we are coming to inheritance using classes
// Example usage provided at the end
// subclass Student inherits from superclass Human
// Student has additional property 'grade' and method 'study'
class Human{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log('In Human class');
    }
    
    talk(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

class Students extends Human{
    constructor(name ,age,grade){
        super(name,age);
        this.grade=grade;
        console.log('In Student class')

    }
    ;
    study(){
        console.log(`${this.name} is studying in grade ${this.grade}.`);
}
}
class Teacher extends Human{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}
// let st1=new Students('Hannah',20,'A');
// let st2=new Students('Ian',21,'B');

// st1.talk();
// st1.study();

// let t1=new Teacher('Mr. Smith',40,'Mathematics');
// let t2=new Teacher('Ms. Johnson',35,'Science');
// let t3=new Teacher('Mrs. Brown',45,'History');
// let t4=new Teacher('Dr. Green',50,'Physics');
// let t5=new Teacher('Prof. White',55,'Chemistry');

class Mammal{
    constructor(name,lifespan,food){
        this.name=name;
        this.lifespan=lifespan;
        this.food=food;

    }
    info(){
        console.log(`this is a mammal named ${this.name} with a lifespan of ${this.lifespan} years.`);
    }
    eat(){
        console.log(`${this.name} eats ${this.food}.`);
    }
}
class Whale extends Mammal{
    constructor(name,lifespan,food,weight){
        super(name,lifespan,food);
        this.weight=weight;
    }
    swim() {
        console.log(`${this.name} swims and weighs ${this.weight} tons.`);
    }
}
class Bat extends Mammal{
    constructor(name,lifespan,food,wingspan){
        super(name,lifespan,food);
        this.wingspan=wingspan;
    }
    fly(){
        console.log(`${this.name} flies with a wingspan of ${this.wingspan} feet.`);
    }
}
let w=new Whale('blue whale',80,'krill',200);
