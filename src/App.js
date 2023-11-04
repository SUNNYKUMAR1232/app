import React from "react";
import Navbar from "./component/Navbar.jsx"
import UncontrolledExample from "./component/Middle/ControlledCarousel.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Page from "./component/health/second page.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <image href="./component/Assets/WhatsApp Image 2023-11-04 at 12.15.48_904198ef.jpg"></image>
      {/* //<UncontrolledExample/> */}
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;
