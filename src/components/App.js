
import React from "react";
import './../styles/App.css';
import { BrowserRouter , Routes, Route, Switch } from 'react-router-dom';
import Links from "./Links";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
   
    <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/item1/:userId" element={<Item1></Item1>}></Route>
          <Route path="/item2/:userId" element={<Item2></Item2>}></Route>
          <Route path="/item3/:userId" element={<Item3></Item3>}></Route>
        </Routes>
    </div>
    <Links></Links>
    </BrowserRouter>
  )
}

export default App
