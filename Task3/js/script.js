class Person{
    constructor(name,age,gender,contact,email,description){
              this.name=name;
              this.age=age;
              this.gender=gender;
              this.contact=contact;
              this.email=email;
              this.description = description;
    }
}

const details = new Person("Kumaresan","25","male","9487409906","viduthalai@gmail.com","Sub Inspector");
console.log(details.name);
console.log(details.age);
console.log(details.gender);
console.log(details.contact);
console.log(details.email);
console.log(details.description);