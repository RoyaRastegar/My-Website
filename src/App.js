import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarCom from "./Components/NavbarCom/NavbarCom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Todo from "./Components/Todo/Todo";
import Counter from "./Components/Counter/Counter";
import OnlineShop from "./Components/OnlinShop/OnlineShop";
import Cart from "./Components/OnlinShop/Cart";
import Login from "./Components/Login/Login";
import Time from "./Components/Time/Time";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarCom />
        <Time />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/onlinshop" element={<OnlineShop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
