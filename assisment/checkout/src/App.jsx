import React from "react";
import { useChecklist } from "./ChecklistContext";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"]; // Checklist options

const App = () => {
  const { checkedItems, toggleCheckbox } = useChecklist();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Interactive Checklist</h1>
      {/* Render all checklist options */}
      {options.map((option, index) => (
        <div key={index}>
          <label style={{ display: "flex", alignItems: "center" }}>
            {/* Checkbox Input */}
            <input
              type="checkbox"
              checked={checkedItems.includes(option)}
              onChange={() => toggleCheckbox(option)}
            />
            <span style={{ marginLeft: "8px" }}>{option}</span>
          </label>
        </div>
      ))}

      {/* Display selected options */}
      <div style={{ marginTop: "20px" }}>
        <h2>Selected Options:</h2>
        {checkedItems.length > 0 ? (
          <ul>
            {checkedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No options selected.</p>
        )}
      </div>
    </div>
  );
};

export default App;
