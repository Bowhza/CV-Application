import { useState } from "react";
import Header from "./components/Header";
//import CVForm from "./components/CVForm";
import CVOutput from "./components/CVOutput";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./index.css";

function App() {
  const [info, setInfo] = useState({});

  function getInfo(updatedInfo, index) {
    setInfo({ ...info, [index]: updatedInfo });
    console.log(info);
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <aside className="CVForm">
          <General onChange={getInfo} />
          <Education onChange={getInfo} />
          <Experience onChange={getInfo} />
        </aside>
        <CVOutput info={info} />
      </main>
    </>
  );
}

export default App;
