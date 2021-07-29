
import "./sass/main.scss";
import React from "react"
// import "./css/main.css";
import Navbar from "./components/Navbar";
import NewHeader from "./components/NewHeader.js";
import Footer from "./components/Footer";






const App = () => {
  return(
    <div>
      <Navbar />
      <NewHeader />
      <Footer />
    </div>
  )
}

export default App