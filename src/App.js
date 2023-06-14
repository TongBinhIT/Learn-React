import "./App.scss";
import ColerBox from "./components/ColerBox/index";
import Header from "./components/Header/index";
import { BrowserRouter as Route, Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/colerBox" Component={ColerBox} />
      </div>
    </Router>
  );
}

export default App;
