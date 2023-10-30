// ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css'; // Import your CSS file

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker-container">
      <button
        className='button-class'
        onClick={handleButtonClick}
        style={{ backgroundColor: selectedColor || 'white' }} 
      >
        Pick a color
      </button>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
      {selectedColor && (
        <p>Selected color: {selectedColor}</p>
      )}
    </div>
  );
};

export default ColorPicker;
