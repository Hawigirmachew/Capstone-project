// import { useState } from "react";
import Navigation from "./components/home/Navigation";
import Post from "./components/home/Post";
import Search from "./components/home/Search";
import Title from "./components/home/Title";
import "./index.css";
function App() {
  
  return (
    <div className="container">
      <header className="header">
        <Title />
        <Search />
        <Navigation />
      </header>
      <main>
        <Post />
      </main>
    </div>
  );
}

export default App;
