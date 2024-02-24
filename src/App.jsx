import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Homepage from "./Components/pages/Homepage";
import Sidebar from "./Components/Header/Sidebar";
import { HelpIcon } from "./Components/common/Icon";
import Transaction from "./Components/transaction/Transaction";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <div className='App bg-black min-h-screen'>
        <Toaster />
        <Router>
          <div className=''>
            <Sidebar />
            <Header />
            <Routes>
              <Route
                path='/'
                element={<Homepage />}
              ></Route>
              <Route
                path='/transaction'
                element={<Transaction />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
