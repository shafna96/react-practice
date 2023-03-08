import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ItemForm from "./components/ItemForm";
import TableList from "./components/TableList";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="newitem" element={<ItemForm />} />
          <Route path="itemlist" element={<TableList />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
