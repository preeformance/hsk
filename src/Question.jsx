import React from "react";
import { levelOneWords } from "../data/levelOne";

export default function Question(props) {

  // Create a shuffle function.
  function shuffle(arr) {
    return arr.sort(() => .5 - Math.random())
  }
  // Use the shuffle function to return an array of shuffled elements from levelOneWords and use slice to get the first 4 elements from the array.
  const arrayOfWords = shuffle(levelOneWords).slice(0,4)
  // Set the first question in the shuffled array as the selected question.
  arrayOfWords[0].isCorrect = true
  // Filter the array to pull out the question.
  const chosenQuestion = arrayOfWords.filter(question => question.isCorrect)
  // Shuffle the array of answers.
  const shuffledAnswers = shuffle(arrayOfWords)

  // This is not right. The goal is to make an object of the formatted question so that we can render it multiple times on the page (ex: 5 different questions). I think we might need to declare an array for the formatted quiz and then map the quiz question objects to the array? Something like this: https://scrimba.com/scrim/co9794279adad78679a30f68e -Kristl

  // const formattedQuiz = {
  //   question: question.english,
  //   options: shuffledAnswers.traditional
  // }
  
  console.log(chosenQuestion)


  return (
    <div>
      
    </div>
  )
}



// Pree's
// function Question() {
//   const randomizer = Math.floor(Math.random() * levelOneWords.length);
//   const answer = levelOneWords[randomizer];
//   let optionArray = [answer.Simplified];

//   while (optionArray.length < 5) {
//     if (
//       !optionArray.includes(
//         levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
//       )
//     ) {
//       optionArray.push[
//         levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
//           .Simplified
//       ];
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
//           {answer.English}
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
