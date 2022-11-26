import React from "react";
import { levelOneWords } from "../data/levelOne";

function Question() {
  const randomizer = Math.floor(Math.random() * levelOneWords.length);
  const randomWord = levelOneWords[randomizer];

  function randomOptions() {
    if (
      levelOneWords[Math.floor(Math.random() * levelOneWords.length)] !=
      randomWord
    ) {
      return levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
        .Simplified;
    } else {
      return levelOneWords[Math.floor(Math.random() * levelOneWords.length) + 1]
        .Simplified;
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
          {randomWord.English}
        </li>
        <button>{randomWord.Simplified}</button>
        <button>{randomOptions()}</button>
        <button>{randomOptions()}</button>
        <button>{randomOptions()}</button>
      </ul>
    </div>
  );
}

export default Question;
