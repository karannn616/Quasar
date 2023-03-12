import React from "react";
import "./requests.css";
import "../list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatableone from "../../components/datatableone/Datatableone";

const Requests = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatableone />
      </div>
    </div>
  );
};

export default Requests;
