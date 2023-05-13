import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
// data
import snapshot from "./utils/Data";
import "./index.css";

import NavBar from "./components/home/NavBar";
import Home from "./pages/Home";
import About from './pages/About'
// import { useState } from "react";
function App() {
  // isLoading
  // const [isLoading, setIsLoading] = useState(true)
  //navigation buttons
  const options = [
    { id: 1, active: "all" },
    { id: 2, active: "mountain" },
    { id: 3, active: "beach" },
    { id: 4, active: "bird" },
    { id: 5, active: "food" },
  ];

  // active btn
  const [active, setActive] = useState("all");
  const handleSelectedSnapshot = (e) => {
    setActive(e.target.value);
  };
  // search data
  const [itemSearched, setItemSearched] = useState("");

  const handleSearch = (e) => {
    setItemSearched(e.target.value);
  };
  // to display error message if data is not found
  const [message, setMessage] = useState("");
  // to have all the data of the searched item
  const [itemFound, setItemFound] = useState(null);
  const displaySearchItem = (title) => {
    snapshot.map((snap) =>
      snap.title.toLowerCase() === title.toLowerCase()
        ? setItemFound(snap)
        : setMessage("No data found")
    );
  };

  // popup
 
  return (
    <BrowserRouter>
    <NavBar/>
     <main className="container">

     <Routes>
      <Route path="/" element = {<Home handleSearch= {handleSearch}
      itemSearched = {itemSearched}
      displaySearchItem={displaySearchItem}
      itemFound={itemFound}
      active={active}
      options={options}
      handleSelectedSnapshot={handleSelectedSnapshot}
      snapshot={snapshot}
      message={message}
      />}/>
      <Route path="/about" element = {<About />}/>
     </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App;
