import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      {/* <Content /> */}
    </div>
  );
}

export default App;
