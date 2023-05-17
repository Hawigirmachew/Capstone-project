import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// data
import snapshot from "./utils/Data";
import "./index.css";
// components
import NavBar from "./components/home/NavBar";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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

  // Responsive nav-bar
  const navref = useRef();

  const showMenu = () => {
    navref.current.classList.toggle("responsive-nav");
  };

  return (
    <BrowserRouter>
      <header>
        <NavBar navref={navref} />
        <button className="nav-open" onClick={showMenu}>
          <FaBars />
        </button>
      </header>
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSearch={handleSearch}
                itemSearched={itemSearched}
                displaySearchItem={displaySearchItem}
                itemFound={itemFound}
                active={active}
                options={options}
                handleSelectedSnapshot={handleSelectedSnapshot}
                snapshot={snapshot}
                message={message}
              />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
