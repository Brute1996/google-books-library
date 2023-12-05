import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
const Homepage = lazy(() => import("../pages/Homepage"));
const Bookpage = lazy(() => import("../pages/Bookpage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/book/:bookId" element={<Bookpage />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
