import React, { useState } from "react";
import Input from "./Input";
import EduItem from "./EduItem";
import "../styles/Education.css";

const items = {
  school: {
    name: "school",
    label: "School Name",
    type: "text",
  },
  title: {
    name: "title",
    label: "Title of Study",
    type: "text",
  },
  start: {
    name: "start",
    label: "Start Date",
    type: "date",
  },
  end: {
    name: "end",
    label: "End Date",
    type: "date",
  },
};

const defaults = {
  school: "",
  title: "",
  start: "",
  end: "",
};

export default function Education({ onChange }) {
  const [eduItems, setEduItems] = useState([]);
  const [currentInput, setCurrentInput] = useState(defaults);

  function handleInputChange(key, value) {
    setCurrentInput((prevInput) => ({
      ...prevInput,
      [key]: value,
    }));
    onChange([...eduItems, { ...currentInput, [key]: value }], "education");
  }

  function addInfo() {
    setEduItems([...eduItems, currentInput]);
    setCurrentInput(defaults);
  }

  function handleUpdate(index, updatedData) {
    const updatedItems = [...eduItems];
    updatedItems[index] = updatedData;
    setEduItems(updatedItems);
    onChange(updatedItems, "education");
  }

  function handleDelete(index) {
    const updatedItems = [...eduItems];
    updatedItems.splice(index, 1);
    setEduItems(updatedItems);
    onChange(updatedItems, "education");
  }

  return (
    <div className="education">
      <h2>Education Section</h2>
      <div className="education-sec">
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
      {eduItems.map((item, index) => (
        <EduItem
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
