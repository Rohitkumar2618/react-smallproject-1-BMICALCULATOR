import React, { useMemo, useState } from "react";

const App = () => {
  //  Use States for changing in real time
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  // Function for changing  weight using input type--> range
  const onWeighChange = (event) => {
    setWeight(event.target.value);
  };

  // Function for changing  height using input type--> range
  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  // function two show the input size
  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Project BMI Calculator</h1>
      <div className="input-section w-full max-w-md p-4 bg-white rounded shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Weight: {weight} kg
          </label>
          <input
            type="range"
            step="1"
            min="40"
            max="200"
            value={weight}
            onChange={onWeighChange}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Height: {height} cm
          </label>
          <input
            type="range"
            step="1"
            min="140"
            max="220"
            value={height}
            onChange={onHeightChange}
            className="w-full"
          />
        </div>
      </div>

      <div className="output-section flex flex-col items-center mt-8 p-4 bg-white rounded shadow-lg w-full max-w-md">
        <p className="text-xl font-semibold">Your BMI is:</p>
        <p className="output text-3xl font-bold text-blue-500 mt-2">{output}</p>
      </div>
    </main>
  );
};

export default App;
