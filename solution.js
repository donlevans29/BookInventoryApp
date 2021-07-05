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
