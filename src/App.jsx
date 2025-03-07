import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="container-fluid">
      {/* Top Search Bar */}
      <div className="bg-light py-3 border-bottom">
        <SearchBar />
      </div>

      {/* Sidebar + Content Layout */}
      <div className="row gx-0">
        {" "}
        {/* Remove extra gaps */}
        {/* Sidebar - 1/3 width, fixed height */}
        <div className="col-md-4 col-lg-3 d-flex flex-column border-end vh-100 overflow-auto">
          <Sidebar />
        </div>
        {/* Main Content Area - takes remaining space */}
        <div className="col-md-8 col-lg-9 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
