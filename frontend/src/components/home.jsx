import React from "react";
import { DataProvider } from "./DataContext";
import Navbar from "./navbar";
import Body from "./body";

function home() {
  return (
    <DataProvider>
      <div className="h-screen">
        <Navbar />
        <Body />
      </div>
    </DataProvider>
  );
}

export default home;
