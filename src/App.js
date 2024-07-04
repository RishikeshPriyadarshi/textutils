import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  // Making state named mode
  const [mode, setMode] = useState('light');
  // Making state name alert
  const [alert, setAlert] = useState(null);

  // Note: we are making alert an object

  // Making showAlert as a method or function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type.toLowerCase() // Ensure type is lowercase
    });

    // Remove the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#18203c';
      showAlert("Dark mode has been enabled", "success");

      document.title = 'TextUtils - DarkMode';

      // Sometimes we see on websites that there are some titles blinking on various parts
      // of apps like "install now" or "download now" or others 
      // these can be done by setting the time intervals 

      // these give the bad experience to users
      // so we must not use these kinds of things in our app or website

      setInterval(() => {
        document.title = 'Install TextUtils Now!';
      }, 2000);

      setInterval(() => {
        document.title = 'TextUtils is Amazing!';
      }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

      document.title = 'TextUtils - LightMode';
    }
  };

  return (
    <>
      <Router>
        {/* Navbar title="TextUtils" aboutText="About Text" */}
        {/* Navbar */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>

                 {/* 
                     it is always good idea to use "exact path = "  because then react does the exact matching , & if we do not use exact then react does
                     the partial matching of path 

                     ex:
                       /users
                       /users/home

                       means if we want to go to url /user/home then without using of exact path router will match partially with url /user and send it or render it  to the user that is why "exact path = " is needed..

                  */}

            <Route exact path="/about" element={<About />} />
            <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />

            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
