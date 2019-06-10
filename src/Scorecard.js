import React, { useState, useEffect } from "react";

function Scorecard({ finalResult, wins, losses, ties }) {
  return (
    <div>
      <p>You Won {wins} times</p>
      <p>You Lost {losses} times</p>
      <p>You Tied {ties} times</p>
    </div>
  );
}

export default Scorecard;
