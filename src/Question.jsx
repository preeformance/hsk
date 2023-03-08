import React from "react";
import { levelOneWords } from "../data/levelOne";

function Question() {
  const randomizer = Math.floor(Math.random() * levelOneWords.length);
  const answer = levelOneWords[randomizer];
  let optionArray = [answer.Simplified];

  while (optionArray.length < 5) {
    if (
      !optionArray.includes(
        levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
      )
    ) {
      optionArray.push[
        levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
          .Simplified
      ];
    }
  }
  return (
    <div>
      <ul type="disc">
        <li
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {/* quiz question: What does this mean? */}
          {answer.English}
        </li>
        {/* multiple choice */}

        <button>{optionArray[0]}</button>
        <button>{optionArray[1]}</button>
        <button>{optionArray[2]}</button>
        <button>{optionArray[3]}</button>
      </ul>
    </div>
  );
}

export default Question;
