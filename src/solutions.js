let numCopies = -2;

function getAvaliliability() {
  if (numCopies <= 0) {
  console.log("Out of Stock 😥")
  } else if (numCopies <= 10 ) {
    console.log ("low Stock 😨")
  } else { 
    console.log("In Stock 😉")
  }
 } 
 
getAvaliliability();

// GETTER SETTER METHOD
const vehicle = {
  make: "Cheverolet",
  model: "Corvette",
  trim: "Z06",
  year: 2018,
get vehicleModel (){
   return `${vehicle.model} ${vehicle.trim}`;
    },
set vehicleModel(value) {
    const parts = value.split (' ');
    this.model = parts[0];
    this.trim = parts[1];
    },
};

vehicle.vehicleModel = "Chevy C8"

console.log(vehicle);
