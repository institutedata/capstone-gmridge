import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Milage from "./routes/Mileage";
import Contact from "./routes/Contact";
import Login from "./routes/Login";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/mileage" element={<Milage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>


        </Routes>

        <Navbar/>
      </div>
    );
  }

  export default App;