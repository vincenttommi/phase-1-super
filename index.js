//learning goals 
//recognize how to use super
//recognize how to use super object




class  Pet{
constructor(name){
     //creating a object of name
     this.name = name;
     //initializing instance of an object  name to variabel name
     this.owner = null;
}
   
speak(){
//method speak returning instance of variable name created in an object
// with message speaks
return `${this.name} speaks.`;

}

}

//inherits from pet

class Dog extends Pet{

//class Dog inherits from class pet
// xstics of  name and breed
 constructor(name,breed){
//creating new objects name and breed
super(name); // super holds the  the properties of   name in the newly inherited class

this.breed  = breed;

//initializes the instance of a new   created object breed to instance of object created breed

 }   
}

 

const creature  = new Pet("The Thing");
//creating an object creature and assigning it to a new instance of inherited pet class
// and  passed in an argument of thing

const  dog = new Dog("Spot","Foxhound");


console.log(dog);
