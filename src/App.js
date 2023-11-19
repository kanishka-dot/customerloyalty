import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter";
import {Routes, Route} from'react-router-dom';
import Home from "./components/pages/Home";

function App() {
  return (
    <>
    <Routes>
      <Route path='/model/home'  element={<Home />}/>
    </Routes>
  </>
  );
}

export default App;
