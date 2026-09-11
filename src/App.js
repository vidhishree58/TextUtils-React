import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import React, { useState } from 'react';
import Alert from './componenets/Alert';
import About from './componenets/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>

      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div style={{ height: "60px" }}>
        <Alert alert={alert} />
      </div>

      <div className="container my-3">

        <Routes>

          <Route
            path="/about"
            element={<About mode={mode} />}
          />

          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Transform and analyze your text with ease"
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