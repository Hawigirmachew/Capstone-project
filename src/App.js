import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import NavigationButtons from "./components/home/NavigationButtons";
import Popup from "./components/home/Popup";
import Post from "./components/home/Post";
import Search from "./components/home/Search";
import Title from "./components/home/Title";
// data
import snapshot from "./utils/Data";
import "./index.css";
import SearchedItem from "./components/home/SearchedItem";
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
  const [timePopup, setTimePopup] = useState(false)
  useEffect(() => {
    setTimeout(() =>{
      setTimePopup(true)
    },3000)
  },[timePopup])
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Popup timePopup = {timePopup} setTimePopup = {setTimePopup}/>
          <Title />
          <Search
            handleSearch={handleSearch}
            itemSearched={itemSearched}
            displaySearchItem={displaySearchItem}
          />
         
        </header>
        <main>

          {itemSearched  && itemFound ? (
            <SearchedItem item={itemFound} />
          ) : (
            <div className="error-message">{message}</div>
          )}
           <NavigationButtons
            options={options}
            handleSelectedSnapshot={handleSelectedSnapshot}
          />
          {active === "all" && <Post snapshot={snapshot} />}
          {active === "mountain" && (
            <Post
              snapshot={snapshot.filter((snap) => snap.type === "mountain")}
              type="Mountains"
            />
          )}
          {active === "beach" && (
            <Post
              snapshot={snapshot.filter((snap) => snap.type === "beach")}
              type="Beaches"
            />
          )}
          {active === "bird" && (
            <Post
              snapshot={snapshot.filter((snap) => snap.type === "bird")}
              type="Birds"
            />
          )}
          {active === "food" && (
            <Post
              snapshot={snapshot.filter((snap) => snap.type === "food")}
              type="Foods"
            />
          )}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
