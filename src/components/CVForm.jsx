import General from "./General";
import Education from "./Education";
import "../styles/CVForm.css";

export default function CVForm() {
  return (
    <aside className="CVForm">
      <General />
      <Education />
    </aside>
  );
}
