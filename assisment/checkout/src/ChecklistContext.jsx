import React, { createContext, useState, useContext } from "react";

// Create context
const ChecklistContext = createContext();

// Custom hook to use the context
export const useChecklist = () => useContext(ChecklistContext);

// ChecklistProvider to wrap the App component
export const ChecklistProvider = ({ children }) => {
  // State to track selected options
  const [checkedItems, setCheckedItems] = useState([]);

  // Function to toggle checkbox state
  const toggleCheckbox = (option) => {
    setCheckedItems((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option) // Uncheck option
        : [...prev, option] // Check option
    );
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, toggleCheckbox }}>
      {children}
    </ChecklistContext.Provider>
  );
};
