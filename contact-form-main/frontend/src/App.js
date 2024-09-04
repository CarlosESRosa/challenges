import React, { useState } from "react";

import "./App.css";
import TextInput from "./components/TextInput/TextInput";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1>Contact Us</h1>
        <div className="two-input-line">
          <TextInput
            label="First Name"
            value={inputValue}
            onChange={handleInputChange}
            isRequired={true}
          />
          <TextInput
            label="Last Name"
            value={inputValue}
            onChange={handleInputChange}
            isRequired={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
