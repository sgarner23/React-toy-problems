import React from "react";
import { useState } from "react";

const FilterObject = () => {
  let originalArr = [
    { name: "Stephen Garner", occupation: "The Boss" },
    { name: "Mia", hobbies: "throwing fits" },
    { name: "Chourtney", hairColor: "Brown" },
  ];

  const [userInput, setUserInput] = useState("");
  const [filterText, setFilterText] = useState("Filtered: []");

  function clickHandler() {
    const filteredArr = originalArr.filter((item) => {
      return userInput in item;
    });

    setFilterText(`Filtered: [${JSON.stringify(filteredArr)}]`);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Filter Object</h4>
      <p className="original-arr"> Original: {JSON.stringify(originalArr)}</p>
      <input
        className="inputLine"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterObjectRB">{filterText}</span>
    </div>
  );
};

export default FilterObject;
