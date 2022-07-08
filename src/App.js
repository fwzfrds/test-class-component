import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Test from "./pages/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/test" element={<Test title={'Test Test'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
