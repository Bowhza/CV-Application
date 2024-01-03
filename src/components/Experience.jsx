import React, { useState } from "react";
import Input from "./Input";
import ExpItem from "./ExpItem";
import "../styles/Experience.css";

const items = {
  company: {
    id: "companyname",
    name: "companyname",
    label: "Company Name",
    type: "text",
  },
  position: {
    id: "positiontitle",
    name: "positiontitle",
    label: "Position Title",
    type: "text",
  },
  responsibilities: {
    id: "responsibilities",
    name: "responsibilities",
    label: "Main Responsibilities",
    type: "text",
  },
  start: {
    id: "startdate",
    name: "startdate",
    label: "Start Date",
    type: "date",
  },
  end: {
    id: "enddate",
    name: "enddate",
    label: "End Date",
    type: "date",
  },
};

const defaults = {
  company: "",
  position: "",
  responsibilities: "",
  start: "",
  end: "",
};

export default function Experience() {
  const [expItems, setExpItems] = useState([]);
  const [currentInput, setCurrentInput] = useState(defaults);

  function handleInputChange(key, value) {
    setCurrentInput((prevInput) => ({
      ...prevInput,
      [key]: value,
    }));
  }

  function addInfo() {
    setExpItems([...expItems, currentInput]);
    setCurrentInput(defaults);
  }

  function handleUpdate(index, updatedData) {
    const updatedItems = [...expItems];
    updatedItems[index] = updatedData;
    setExpItems(updatedItems);
  }

  function handleDelete(index) {
    const updatedItems = [...expItems];
    updatedItems.splice(index, 1);
    setExpItems(updatedItems);
  }

  return (
    <div className="experience">
      <h2>Practical Experience</h2>
      <div className="experience-sec">
        {Object.values(items).map((item, index) => (
          <Input
            key={item.name}
            props={item}
            value={currentInput[item.name]}
            onChange={(e) => handleInputChange(item.name, e.target.value)}
          />
        ))}
      </div>

      <button onClick={addInfo}>Add Info</button>
      {expItems.map((item, index) => (
        <ExpItem
          key={index}
          props={item}
          index={index}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
