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


const vehicle = {
  make: "Cheverolet",
  model: "Corvette",
  trim: "Z06",
  year: 2018,
vehicleModel (){
  return `${vehicle.model} ${vehicle.trim}`;
  }
};

console.log(vehicle.vehicleModel());
