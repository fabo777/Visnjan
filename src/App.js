import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route
            path={"/"}
            exact
            element={
              <>
                <Navbar />
                <Homepage />
              </>
            }
          />
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
