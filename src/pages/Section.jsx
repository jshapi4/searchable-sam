import React from "react";
import { useParams } from "react-router-dom";
import manualData from "../data/manual.json"; // Ensure this path is correct

const Section = () => {
  const { id } = useParams(); // Get section ID from URL
  let section = null;

  // Loop through chapters to find the matching section
  for (const chapter of manualData) {
    section = chapter.sections.find((s) => s.id === id);
    if (section) break; // Stop searching once found
  }

  if (!section) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          <strong>Section Not Found</strong> – Please select a valid section.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="border-bottom pb-2 mb-4">
        <h2 className="text-primary">
          {section.title}-{section.id}
        </h2>
        <p className="lead text-muted">{section.content}</p>{" "}
        {/* Ensure this is structured correctly */}
      </div>
    </div>
  );
};

export default Section;
