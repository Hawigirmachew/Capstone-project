import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar({ navref }) {
  // const [sticky, setSticky] = useState(false);
  // //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 150);
  //     console.log(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <nav className="sticky">
      <ul className="navList" ref={navref}>
        <li className="navList-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navList-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navList-item">
          <Link to="/news">News</Link>
        </li>

        <li className="navList-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
