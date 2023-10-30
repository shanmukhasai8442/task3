// src/App.js
import React from 'react';
import './App.css'; // You may have other styles here
import ColorPicker from './ColorPicker'; // Import your ColorPicker component

function App() {
  const colors = ["red", "green", "blue", "yellow", "purple",
  "orange", "pink", "cyan", "brown", "violet",
  "gray", "indigo", "lime", "magenta", "teal",
  "navy", "maroon", "olive", "turquoise", "plum",
  "gold", "silver", "peru", "salmon","gray", "indigo", "lime", "magenta", "green", "blue", "yellow"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Picker</h1>
      </header>
      <main className='clp'>
        <ColorPicker colors={colors} /> {/* Render your ColorPicker component */}
      </main>
    </div>
  );
}

export default App;
