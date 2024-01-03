import React from "react";
import "../styles/Input.css";

export default function Input({
  props: { name, label, type, id },
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={name}>
        {label}: <br />
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
