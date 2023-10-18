import React, { useEffect, useState } from "react";
import "./App.css";
import logoImg from "./img/logo.png";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import ProductsAndServices from "./Pages/ProductsAndServices";
import { MdMenu } from "react-icons/md";
const arr = ["About us", "ProductsAndServices", "Gallery", "Contact"];

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    // Function to check if the viewport width is less than or equal to 768 pixels (adjust this value as needed)
    const checkMobileView = () => {
      const isMobileSize = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileSize);
    };

    // Initial check when the component mounts
    checkMobileView();

    // Listen for resize events and update the state accordingly
    window.addEventListener("resize", checkMobileView);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
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
  console.log(popup);
  return (
    <div className="app">
      <nav>
        <img alt="" className="logo" src={logoImg}></img>
        {!isMobile ? (
          arr.map((data) => {
            return (
              <div
                style={data === state ? { color: "#3D76D6" } : {}}
                className="dataSectionNames"
                onClick={() => setState(data)}
              >
                {data}
              </div>
            );
          })
        ) : (
          <button
            onClick={() => setPopup(!popup)}
            style={{
              height: "50px",
              marginRight: "10px",
              marginLeft: "auto",
              width: "60px",
              fontSize: "45px",
              marginTop: "10px",
              border: "none",
              color: "#255282",
              background: "none",
            }}
          >
            <MdMenu />
          </button>
        )}
      </nav>
      {popup && (
        <div
          style={{
            width: "200px",
            height: "130px",
            // border: "1px solid",
            position: "absolute",
            top: 70,
            // right: 10,
            right: 20,
            background: "#ccc",
            borderRadius: "12px",
            padding: "4px",
          }}
        >
          {arr.map((data) => {
            return (
              <div
                style={
                  data === state ? { color: "#3D76D6", fontWeight: "bold" } : {}
                }
                className="dataSectionNames"
                onClick={() => {
                  setState(data);
                  setPopup(false);
                }}
              >
                {data}
              </div>
            );
          })}
        </div>
      )}
      {/* <header>
        <h1>Viral Holdings (PTY) LTD</h1>
        <h2>Wood Works Industry</h2>
      </header> */}

      {/* Add more sections for Mission, Corporate Profile, Management, Quality Assurance, Products, Services, Benefits, etc. */}
      {section()}

      <footer>
        <p className="PFooterTags">We thank you in advance</p>
        <p className="PFooterTags">REGISTRATION NUMBER: 2019/314365/07</p>
        <p className="PFooterTags">CSD-SUPPLY NUMBER: MAAA0876489</p>
        <p className="PFooterTags">
          ADDRESS: No. 109 Link Road, Langlaagte Industrial
        </p>
      </footer>
    </div>
  );
};

export default App;
