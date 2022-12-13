import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Todo from "./pages/Todo/Todo";
import Auth from "./pages/Auth/Auth";

const App =()=> {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/"  element={<Auth/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
