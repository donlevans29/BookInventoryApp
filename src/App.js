
// function controller

function book(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;

}

book.prototype.getAvailability = function(){
  if (this.numCopies === 0) {
  return "Out of Stock";
} else if(this.numCopies < 10) {
  return "Low Stock";
}
return "In Stock";
}


book.prototype.sell = function(numCopiesSold = 1){
  this.numCopies -= numCopiesSold;

}

book.prototype.restock = function(numCopiesStocked = 5) {
  this.numCopies += numCopiesStocked;
}


const Sankofa = new book("Sankofa","Chibundu Onuzo",1646220838, 5);
console.log(Sankofa.getAvailability());
Sankofa.sell(5);
console.log(Sankofa.getAvailability());
Sankofa.restock(100);
console.log(Sankofa.getAvailability());
