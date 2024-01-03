import { useState } from "react";
import Header from "./components/Header";
import CVForm from "./components/CVForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <CVForm />
      </main>
    </>
  );
}

export default App;
