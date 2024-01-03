import React, { useState } from "react";
import Input from "./Input";
import "../styles/EduItem.css";

export default function EduItem({ props, index, onUpdate, onDelete }) {
  const [editState, setEditState] = useState(false);
  const [editedData, setEditedData] = useState({ ...props });

  const handleInputChange = (key, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const toggleState = () => {
    if (editState) {
      onUpdate(index, editedData);
    }
    setEditState(!editState);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className={`EduItem ${editState ? "edit" : "closed"}`}>
      {editState ? (
        <>
          <h3>Editing Info:</h3>
          {Object.entries(editedData).map(([key, value]) => (
            <Input
              key={key}
              props={{
                name: key,
                label: key.charAt(0).toUpperCase() + key.slice(1),
                type: typeof value === "string" ? "text" : "date",
              }}
              value={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          ))}
        </>
      ) : (
        <p>
          {Object.entries(props).map(([key, value]) => (
            <React.Fragment key={key}>
              <b>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</b> {value}{" "}
            </React.Fragment>
          ))}
        </p>
      )}
      <div>
        <button onClick={toggleState}>{editState ? "Save" : "Edit"}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
