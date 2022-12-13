import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Todo from "./pages/Todo/Todo";
import Auth from "./pages/Auth/Auth";

const App =()=> {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/"  element={<Auth/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
