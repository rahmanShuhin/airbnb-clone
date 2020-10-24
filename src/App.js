import React from "react";
import "./App.css";
import CardContainer from "./Component/CardContainer/CardContainer";
import Footer from "./Component/Footer/Footer";
import Guests from "./Component/Guests/Guests";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Search_Date from "./Component/Search_Date/Search_Date";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
      <CardContainer></CardContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
