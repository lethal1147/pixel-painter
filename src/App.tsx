import { useState } from 'react'
import './pixelPainter.css'
import { HexColorPicker } from 'react-colorful';

function App() {
  const boardSize = 124;
  const [currentColor, setCurrentColor] = useState("#000000");
  const [darkMode, setDarkMode] = useState(false)

  const handlePixelClick = (event) => {
    const pixel = event.target;
    pixel.style.backgroundColor = currentColor;
  };

  const generateBoard = () => {
    const board = Array(boardSize * boardSize).fill(0);

    return board.map((_, index) => (
      <div
        key={index}
        className="pixel"
        onDragEnter={handlePixelClick}
        onClick={handlePixelClick}
      ></div>
    ));
  };

  return (
    <div style={{ backgroundColor: 'black' }} className="container">
      <div className="sidebar">
        <HexColorPicker color={currentColor} onChange={setCurrentColor} />
        <div className="value" style={{ borderLeftColor: currentColor }}>
          Current color is {currentColor}
        </div>
      </div>
      <div className="board-container">{generateBoard()}</div>
    </div>
  )
}

export default App
