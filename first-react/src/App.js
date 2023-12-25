import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtil-Dark";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtil-light";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutxt="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} />}></Route>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
