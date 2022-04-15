import React from "react";
import background from "../../../images/background.png";
import { BsSearch } from "react-icons/bs";
import "./Homepage.css";
const Homepage = () => {
  const homepage = {
    width: "100vw",
    height: "80vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
  };
  return (
    <div style={homepage} className="py-4">
      <h1 className="py-5 ">Best Food Waiting For Your Belly</h1>
      <div className="SearchBox my-5">
        <input
          type="text"
          className="SearchBox-input "
          placeholder="Search food  Items"
        />

        <button className="SearchBox-button">
          <i className="SearchBox-icon  px-2 material-icons">
            <BsSearch size={30} />
          </i>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
