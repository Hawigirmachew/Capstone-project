import React from 'react'

function Popup({timePopup, setTimePopup}) {
  return timePopup ? (
    <div className='popup'>
      <div className="inner-popup">
        <p>Start searching for mountains by "mount then name of the mountain" </p>
        <button className='popup-close' onClick={() => setTimePopup(false)}>close</button>
      </div>
    </div>
  ):""
}

export default Popup
