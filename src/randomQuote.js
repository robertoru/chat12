import React from "react";

export const RandomQuote = (props) => {
  const quotes = [
    "Do not let the behavior of others destroy your inner peace.",
    "This is my secret for inner peace. I don’t mind what happens.",
    "Learning to ignore things is one of the great paths to inner peace.",
    "The best fighter is never angry.",
    "Promise yourself to be so strong that nothing can disturb your peace of mind.",
    "You’ll never find peace of mind until you listen to your heart",
    "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",
    "The life of inner peace, being harmonious and without stress, is the easiest type of existence.",
    "The simplification of life is one of the steps to inner peace. A persistent simplification will create an inner and outer well-being that places harmony in one’s life.",
    "Peace comes from within. Do not seek it without."
  ];
  //const n = Math.floor(Math.random() * quotes.length);
  console.log(props.num);
  return (
    <div style={{ cursor: "pointer" }}>
      <div>{quotes[props.num.current]}</div>
    </div>
  );
};
