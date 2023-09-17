import { useState } from "react";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-[100vh]">
      <Outlet />
    </div>
  );
}

export default App;
