import React from "react";
import { Link, useLocation } from "react-router-dom";
import manualData from "../data/manual.json";

const Sidebar = () => {
  const location = useLocation(); // Get current URL

  return (
    <div className="bg-light border-end vh-100 overflow-auto p-3">
      <h2 className="text-dark text-center">Table of Contents</h2>
      {manualData.map((chapter) => (
        <div key={chapter.title} className="mb-3">
          <h5 className="text-primary">{chapter.title}</h5>
          <ul className="list-unstyled ps-2">
            {chapter.sections.map((section) => (
              <li key={section.id} className="mb-1">
                <Link
                  to={`/section/${section.id}`}
                  className={`d-block py-1 text-decoration-none ${
                    location.pathname === `/section/${section.id}`
                      ? "fw-bold text-dark"
                      : "text-secondary"
                  }`}
                >
                  {section.id} - {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
