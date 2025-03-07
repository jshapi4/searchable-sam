import React, { useState } from "react";
import Fuse from "fuse.js";
import manualData from "../data/manual.json";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Fuse.js configuration
  const fuse = new Fuse(
    manualData.flatMap((chapter) =>
      chapter.sections.map((section) => ({
        id: section.id,
        title: section.title,
        content: section.content,
      }))
    ),
    {
      keys: ["title", "content"], // Fields to search in
      threshold: 0.3, // Adjust for stricter or looser matching
    }
  );

  // Handle search input change
  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setResults([]);
    } else {
      setResults(fuse.search(input).map((result) => result.item));
    }
  };

  // Handle search selection
  const handleSelectResult = (section) => {
    setResults([]); // Hide search results
    navigate(`/section/${section.id}`); // Navigate to selected section
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search the manual..."
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <ul className="list-group mt-2">
          {results.map((section) => (
            <li
              key={section.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelectResult(section)}
              style={{ cursor: "pointer" }}
            >
              {section.title}-{section.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
