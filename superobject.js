//learning goals
// how to recognize using super get objects


class Pet{

constructor(name){

  //class pet takes in a parameter 
  //assigns it to  property name
  // and creates  property owmer and assigns it to null 
    this.name = name;
    this.owner  = null;

}


static definition(){
return `A pet id an animal kept primarily for a person's company`;    
 //creation of a static method and returns the  above message

}
}

//inherits from pet 

class Dog extends Pet{

constructor(name, breed){

    // creates two objects    name and breed

 super(name);
 ///inherits properties of obejct name
 this.breed = breed;
 //assigns breed to property breed



}    


static definition(){

return(
    super.definition() + "Dogs are the most common type of pets"
);
}
}

const creature  = new Pet("The Thing");
const dog = new Dog("spot","foxhound");



console.log(Pet.definition());

console.log(Dog.definition());