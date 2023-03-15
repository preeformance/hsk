// import React, {useState, useEffect} from "react";
// import { levelOneWords } from "../data/levelOne";

// export default function Question(){

//   const questionFormat =
//   const arrayOfAnswers =
// }

// function Question() {
//   const randomizer = Math.floor(Math.random() * levelOneWords.length);
//   const answer = levelOneWords[randomizer].english;
//   let optionArray = [answer.simplified];

//   while (optionArray.length < 5) {
//     if (
//       !optionArray.includes(
//         levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
//       )
//     ) {
//       optionArray.push(
//         levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
//           .simplified
//       );
//     } else {
//       optionArray.push(
//         levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
//           .simplified
//       );
//     }
//   }
//   return (
//     <div>
//       <ul type="disc">
//         <li
//           style={{
//             fontWeight: "bold",
//             color: "red",
//           }}
//         >
//           {/* quiz question: What does this mean? */}
//           {answer.english}
//         </li>
//         {/* multiple choice */}

//         <button>{optionArray[0]}</button>
//         <button>{optionArray[1]}</button>
//         <button>{optionArray[2]}</button>
//         <button>{optionArray[3]}</button>
//       </ul>
//     </div>
//   );
// }

// export default Question;
