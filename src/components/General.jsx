import "../styles/General.css";
import Input from "./Input";

const items = {
  first: {
    id: "fname",
    name: "fname",
    label: "First Name",
    type: "text",
  },
  last: {
    id: "lname",
    name: "lname",
    label: "Last Name",
    type: "text",
  },
  email: {
    id: "email",
    name: "email",
    label: "E-Mail",
    type: "email",
  },
  phone: {
    id: "phone",
    name: "phone",
    label: "Phone",
    type: "tel",
  },
};

export default function General({ onChange }) {
  return (
    <div className="general">
      <h2>General Information</h2>
      <div className="general-sec">
        <Input
          props={items.first}
          onChange={(e) => onChange(e.target.value, "first")}
        />
        <Input
          props={items.last}
          onChange={(e) => onChange(e.target.value, "last")}
        />
      </div>
      <div className="general-sec">
        <Input
          props={items.email}
          onChange={(e) => onChange(e.target.value, "email")}
        />
        <Input
          props={items.phone}
          onChange={(e) => onChange(e.target.value, "phone")}
        />
      </div>
    </div>
  );
}
