import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = () => {
  const [customer, setCustomer] = useState(""); //true is employer, false is job seeker
  const [email, setEmail] = useState("");

  const customerFlipper = val => {
    setCustomer(val);
  };

  const emailFlipper = val => {
    setEmail(val);
  };

  useEffect(() => {
    //delete this after testing
    customerFlipper(true);
    emailFlipper("sam@gmail.com");
  }, []);

  return (
    <div className="App">
      <NavBar customerFlipper={customerFlipper} emailFlipper={emailFlipper} />
      <Main customer={customer} email={email} />
    </div>
  );
};

export default App;
