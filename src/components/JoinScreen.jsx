import React from "react";

const JoinScreen = ({start}) => {
  return (
    <div className="join-screen">
      <h2>Join Quiz</h2>
      <p>
       Welcome to This Quiz you will be given 5 questions and 10 seconds for Each Question. Do your Best.
      </p>
      <button onClick={start}>Start</button>
    </div>
  );
};

export default JoinScreen;
