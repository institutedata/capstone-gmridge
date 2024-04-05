import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Milage from "./routes/Mileage";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateUser";
import JourneyList from './pages/journey/journey-list';
import JourneyForm from './pages/journey/journey-form';
import JourneyDetails from './pages/journey/journey-detail';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/mileage" element={<Milage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-account" element={<CreateAccount/>}/>
          <Route path="/journey/list" element={<JourneyList />}/>
          <Route path="/journey/form" element={<JourneyForm />} />
          <Route path="/journey/details" element={<JourneyDetails />} />
        </Routes>

      </div>
    );
  }

  export default App;