import React, { useState } from "react";
import "./App.css";
import logoImg from "./img/logo.png";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import ProductsAndServices from "./Pages/ProductsAndServices";

const arr = ["About us", "ProductsAndServices", "Gallery", "Contact"];

const App = () => {
  const [state, setState] = useState("About us");
  let body = "";
  const section = () => {
    switch (state) {
      case "About us":
        body = <AboutUs />;
        break;

      case "ProductsAndServices":
        body = <ProductsAndServices />;
        break;

      case "Gallery":
        body = <Gallery />;
        break;
      case "Contact":
        body = <ContactUs />;
        break;
      default:
        body = <AboutUs />;
        break;
    }
    return body;
  };
  return (
    <div className="app">
      <nav>
        <img alt="" className="logo" src={logoImg}></img>
        {arr.map((data) => {
          return (
            <div
              style={data === state ? { color: "#3D76D6" } : {}}
              className="dataSectionNames"
              onClick={() => setState(data)}
            >
              {data}
            </div>
          );
        })}
      </nav>
      {/* <header>
        <h1>Viral Holdings (PTY) LTD</h1>
        <h2>Wood Works Industry</h2>
      </header> */}

      {/* Add more sections for Mission, Corporate Profile, Management, Quality Assurance, Products, Services, Benefits, etc. */}
      {section()}

      <footer>
        <p>We thank you in advance</p>
        <p>REGISTRATION NUMBER: 2019/314365/07</p>
        <p>CSD-SUPPLY NUMBER: MAAA0876489</p>
        <p>ADDRESS: No. 109 Link Road, Langlaagte Industrial</p>
      </footer>
    </div>
  );
};

export default App;
