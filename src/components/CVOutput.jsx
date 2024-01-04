import React, { Fragment } from "react";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import "../styles/CVOutput.css";

export default function CVOutput({ info }) {
  function downloadAsPDF() {
    // Get the HTML element to download
    const elementToDownload = document.querySelector(".cv-sheet");

    // Initialize jsPDF
    const pdf = new jsPDF();

    // Convert the HTML element to PDF using html2pdf
    html2pdf(elementToDownload, {
      margin: 10,
      filename: "downloaded-document.pdf",
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  }

  return (
    <section className="CVOutput">
      <div className="cv-sheet">
        <div className="general-info">
          <h1>
            {info.first ? info.first : "Full Name"}
            {info.last ? `, ${info.last}` : null}
          </h1>
          <p>
            {info.email ? (
              <>
                <b>E-Mail: </b>
                {info.email}
              </>
            ) : (
              "E-Mail:"
            )}
            <br />
            {info.phone ? (
              <>
                <b>Phone: </b>
                {info.phone}
              </>
            ) : (
              "Phone:"
            )}
          </p>
          <hr />
        </div>
        <div>
          <h2>{info.education ? "Education" : null}</h2>
          {info.education && <hr />}
          {info &&
            info.education &&
            info.education.map((item) => (
              <div key={item.school} className="card">
                <h3 className="name">{item.school}</h3>
                <p className="info">
                  {item.title ? `Title: ${item.title}` : null}
                  <br />
                  {item.start ? `From: ${item.start}` : null}
                  {item.end ? ` To: ${item.end}` : null}
                </p>
              </div>
            ))}
        </div>
        <div>
          {info.experience ? <hr /> : null}
          <h2>{info.experience ? "Experience" : null}</h2>
          {info.experience && <hr />}
          {info &&
            info.experience &&
            info.experience.map((item) => (
              <div key={item.company} className="card">
                <h3 className="name">
                  {item.company}
                  {item.position ? ` - ${item.position}` : null}
                </h3>
                <p className="info">
                  {item.responsibilities
                    ? `Responsibilities: ${item.responsibilities}`
                    : null}
                  <br />
                  {item.start ? `From: ${item.start}` : null}
                  {item.end ? ` To: ${item.end}` : null}
                </p>
              </div>
            ))}
        </div>
      </div>
      <button className="download-btn" onClick={downloadAsPDF}>
        Download as PDF
      </button>
    </section>
  );
}
