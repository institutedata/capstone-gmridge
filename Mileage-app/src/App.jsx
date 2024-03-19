import { BrowserRouter as Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/Home";
import CommentList from "./components/Comments";
import GoogleMapsComponent from "./components/GoogleMapsComponent";
import JourneyDetails from "./components/JourneyDetails";
import JourneyForm from "./components/JourneyForm";
import JourneyList from "./components/JourneyList";
import Login from "./authorization/Login";
import Register from "./authorization/Register";
import NavBar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? createTheme({ mode: "dark" }) : lightTheme}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/clients/new" element={<ClientForm />} />
            <Route path="/appointments/new" element={<AppointmentForm />} />
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/services/new" element={<ServicesForm />} />
            <Route path="/services" element={<ServicesList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Box>
      </ThemeProvider>
    </div>
  );
  }
  export default App;


  function JourneyListPage() {
    return (
      <Box sx={{ width: '94vw', p: 2}}>
        <JourneyList />
      </Box>
    );
  }

  function JourneyDetailsPage() {
    return (
      <Box sx={{ width: '94vw', p: 2}}>
        <JourneyDetails />
      </Box>
    );
  }

  function JourneyFormPage() {
    return (
      <Box sx={{ width: '94vw', p: 2}}>
        <JourneyForm />
      </Box>
    );
  }

  function CommentListPage() {
    return (
      <Box sx={{ width: '94vw', p: 2}}>
        <CommentList />
      </Box>
    );
  }

  function GoogleMapsComponentPage() {
    return (
      <Box sx={{ width: '94vw', p: 2}}>
        <GoogleMapsComponent />
      </Box>
    );
  }

