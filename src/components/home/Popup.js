import React from "react";

function Popup({ timePopup, setTimePopup }) {
  return timePopup ? (
    <div className="popup">
      <div className="inner-popup">
        <p>
          Enter "mount then name of the mountain" to begin your search for
          mountains.
        </p>
        <button className="popup-close" onClick={() => setTimePopup(false)}>
         X
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
