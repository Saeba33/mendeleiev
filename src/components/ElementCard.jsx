"use client";

import React, { useState } from "react";
import ElementCardFront from "./ElementCardFront";
import ElementCardBack from "./ElementCardBack";

const ElementCard = ({ element }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation(); 
    setIsFlipped(!isFlipped);
    };

  return (
    <div className="relative w-80 h-96" onClick={handleFlip}>
      {isFlipped ? (
        <ElementCardBack element={element} />
      ) : (
        <ElementCardFront element={element} />
      )}
    </div>
  );
};

export default ElementCard;
