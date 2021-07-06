import React from "react"
import './App.css';
import './data.js';

function App() {
  return (
    <div className="Wrapper" style={{ backgroundColor: "#98AFC7", padding: "20px" }}>
        <h1 style={{ color: "white"}}>Welcome to the Book Inventory App </h1>
        <div style={{ backgroundColor: "#FAFAFA", padding: "20px" }} >
          <h3> Search Book Inventory Below </h3>
        </div>
        <div>
          <input className="book" placeholder="Search Books"></input><button style={{padding: "1px"}}>Submit</button>
        </div>
    
   /*
   
   Craete a class function.
   Later this will be refactored into a constructor class.
   
   class books(title, author, ISBN, numCopies) {
    this.title = title;
    this.author=author;
    this.ISBN=ISBN;
    this.numCopies=numCopies;
   
   }
   
   
   */

    </div>
    
     
  );
}

export default App;
