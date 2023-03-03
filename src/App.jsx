import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ItemForm from "./components/ItemForm";
import TableList from "./components/TableList";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
