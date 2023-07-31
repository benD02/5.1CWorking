import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  FinDev,
  FindJob,
  Create,
  Login
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/findDev" element={<FinDev />} />
      <Route path="/findJob" element={<FindJob />} />
      <Route path="/Account/login" element={<Create />}>
        <Route path="" element={<Login />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
