import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

 

  const orangeMode=()=>{
    let mode = 'light';
      setMode('dark');
      document.body.style.backgroundColor = '#d06d11';
      showAlert("  Orange Mode has been enabled", "success");
  }
  const greenMode=()=>{
    let mode = 'light';
      setMode('dark');
      document.body.style.backgroundColor = '#4B5320';
      showAlert("  Green Mode has been enabled", "success");
  }
  const purpleMode=()=>{
    let mode='light';
    setMode('dark');
    document.body.style.backgroundColor = '#704264';
    showAlert("  Purple Mode has been enabled", "success")
  }

    const darkMode = () => {
      let mode = 'light';
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been enabled', 'success');
    };
  
    const lightMode = () => {
      let mode = 'dark';
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('  Light Mode has been enabled', 'success');
    };
  return (
    <>
      <Router>
        <Navbar
          title="Text Toolbox"
          aboutText="About"
          mode={mode}
          orangeMode={orangeMode}
          greenMode={greenMode}
          purpleMode={purpleMode}
          darkMode={darkMode}
          lightMode={lightMode }
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
