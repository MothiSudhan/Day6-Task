class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get Color() {
    return this.color;
  }
  set Color(n) {
    this.color = n;
  }
  get toString() {
    return `Circle[radius=${this.radius},color = ${this.color}]`;
  }
  get Area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  get Circumference() {
    return 2 * Math.PI * this.radius;
  }
}

const cir = new Circle(2.0, "blue");

console.log(`Radius =  ${cir.Radius}`); 
cir.Radius = 3.0; 

console.log(`color = ${cir.color}`); 
cir.color = "red"; 

console.log(`string = ${cir.toString}`); 

console.log(`Area = ${cir.Area}`); 

console.log(`Circumference = ${cir.Circumference}`); 
