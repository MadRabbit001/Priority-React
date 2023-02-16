import React from "react";
import {Route,Routes} from "react-router-dom";

import Login from "./pages/login/Login";
import Main from "./pages/main/Main";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/main' element={<Main />} />
      </Routes>
  )
}

export default App;
