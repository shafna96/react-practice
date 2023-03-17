import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import RoutesNav from "./navigations/RoutesNav";
import { AuthProvider } from "./navigations/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesNav />
      </AuthProvider>
    </div>
  );
}

export default App;
