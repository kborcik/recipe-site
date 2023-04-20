import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <h2 className="title">Devmountain Eatery</h2>
      <nav>
        <Link to="/">
          <button >Home</button>
        </Link>
        <Link to="/newRecipe">
          <button >Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
