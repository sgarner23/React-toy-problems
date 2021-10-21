import React from "react";
import { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [responseText, setResponseText] = useState("Results:");

  function clickHandler() {
    let reverseStr = [];
    let userPhrase = userInput.replace(/\s/g, "").toLowerCase();

    for (let i = userInput.length - 1; i >= 0; i--) {
      if (userInput.charAt(i) === " ") {
        continue;
      }
      reverseStr.push(userInput.toLowerCase().charAt(i));
    }

    console.log(reverseStr.join(""));
    console.log(userPhrase);

    if (reverseStr.join("") === userPhrase) {
      setResponseText(`Results: true`);
    } else {
      setResponseText(`Results: false`);
    }
  }

  return (
    <div className="puzzleBox filterStrings">
      <h4>Palindrome</h4>
      <input
        className="inputLine"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox">{responseText}</span>
    </div>
  );
};

export default Palindrome;
