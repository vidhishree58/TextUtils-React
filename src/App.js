import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import React, { useState } from 'react';
import Alert from './componenets/Alert';
import About from './componenets/About';

// Import routing components from react-router-dom
// Router → enables navigation without page reload
// Routes → container that holds all route definitions
// Route → defines which component should render for a specific URL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  // State for light/dark mode
  const [mode, setMode] = useState('light');

  // State for alert messagestsa
  const [alert, setAlert] = useState(null);

  // Function to display alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Alert disappears after 1.5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // Function to toggle between dark mode and light mode
  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark'); // change theme mode
      document.body.style.backgroundColor = '#042743'; // change background
      showAlert("Dark mode has been enabled", "success"); // show alert
      // document.title = 'TextUtils - Dark Mode'; // change browser tab title

    }
    else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';

    }
  }

  return (

    // Router enables navigation between pages without reloading
    <Router>

      {/* Navbar appears on all pages */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* Alert area */}
      <div style={{ height: "60px" }}>
        <Alert alert={alert} />
      </div>

      <div className="container my-3">

        {/* Routes container checks the URL and renders the matching component */}
        <Routes>

          {/* 
            When URL is: /about
            React will render the About component
            Example: http://localhost:3000/about
          */}
          <Route path="/about" element={<About mode={mode} />} />

          {/* 
            When URL is: /
            React will render the TextForm component
            Example: http://localhost:3000/
          */}
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;