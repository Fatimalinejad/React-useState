import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextButton() {
    setIndex(index + 1);
  }
  function handleBackButton() {
    setIndex(index - 1);
  }
  function handleShowMore() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextButton}>next</button>
      <button onClick={handleBackButton}>Back</button>
      <h1>
        {sculpture.name} by {sculpture.artist}
      </h1>
      <h2>
        ({index + 1} of {sculptureList.length})
      </h2>
      <button onClick={handleShowMore}>
        {showMore ? "hide" : "show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.name} />
    </>
  );
}
