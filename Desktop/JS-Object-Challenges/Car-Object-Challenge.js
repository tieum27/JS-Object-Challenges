
// Story 1
function createCar(newYear, newMake, newColor)  {
   return {
     year: newYear,
     make: newMake,
     color: newColor,
     getInfo: function()  {
       return "You own a " + this.color + " " + this.year + " " + this.make
     }
   }
}

let car3 = createCar("1995", "Subaru", 'black')
car3.getInfo
let car4 = createCar("2005", "BMW", "purple")
car4.getInfo

//Story 2
function createCar(newYear, newMake, newColor, newSpeed)  {
   return {
     year: newYear,
     make: newMake,
     color: newColor,
     speed: parseInt(newSpeed),
     getSpeed: function() {
       return "You are going " + this.speed + "mph!"
     },
     accelerate: function() { this.speed += 10 ;},
     brake: function() { this.speed -= 7 ;},
     getInfo: function()  {
       return "You own a " + this.color + " " + this.year + " " + this.make
     }
   }
}
let car9 = createCar("2016", "Honda", "blue", "85")

//Story 3
function createCar(newYear, newMake, newColor, newSpeed)  {
   return {
     year: newYear,
     make: newMake,
     color: newColor,
     speed: parseInt(newSpeed),
     getSpeed: function() {
       return "You are going " + this.speed + "mph!"
     },
     // change to a loop
     accelerate: function() {
       while (this.speed < 70) {
         this.speed ++;
       }; // end of while loop
     },
     // change to a loop
     decelerate: function() {
       while (this.speed > 0) {
         this.speed --;
       }; // end of while loop
     },
     getInfo: function()  {
       return "You own a " + this.color + " " + this.year + " " + this.make
     }
   }
}
let car14 = createCar("2017", "Atom", "gold", "25"

//Story 4
function createCar(newYear, newMake, newColor, newSpeed)  {
   return {
     year: newYear,
     make: newMake,
     color: newColor,
     speed: parseInt(newSpeed),
     getSpeed: function() {
       return "You are going " + this.speed + "mph!"
     },
     // change to a loop
     accelerate: function() {
       while (this.speed < 85) {
         this.speed ++;
       }; // end of while loop
     },
     // change to a loop
     decelerate: function() {
       while (this.speed > 0) {
         this.speed --;
       }; // end of while loop
     },
     getInfo: function()  {
       return "You own a " + this.color + " " + this.year + " " + this.make
     }
   }
}
let car15 = createCar("2017", "Lotus", "white", "80")

//Story 5
function createCar(newYear, newMake, newColor, newSpeed)  {
   return {
     year: newYear,
     make: newMake,
     color: newColor,
     speed: parseInt(newSpeed),
     getSpeed: function() {
       return "You are going " + this.speed + "mph!"
     },
     // change to a loop
     accelerate: function() {
       while (this.speed < 85) {
         this.speed ++;
       }; // end of while loop
     },
     // change to a loop
     decelerate: function() {
       while (this.speed > 0 ) {
         this.speed -= Math.floor((Math.random() * (this.speed/2)) + 1);
         console.log(this.speed)
       }; // end of while loop
     },
     getInfo: function()  {
       return "You own a " + this.color + " " + this.year + " " + this.make
     }
   }
}
let car28 = createCar("2017", "Lotus", "white", "80")
