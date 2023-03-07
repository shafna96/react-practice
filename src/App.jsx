import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ItemForm from "./components/ItemForm";
import TableList from "./components/TableList";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(true);
  return (
    <div className="App">
      {/* {logged ? ( */}
      {/* <Home /> */}

      {/* <Routes>
       
      </Routes> */}
      {/* ) : ( */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="newitem" element={<ItemForm />} />
          <Route path="itemlist" element={<TableList />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      {/* )} */}
    </div>
  );
}

export default App;
