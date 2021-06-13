import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  let defaultColor = new Values("#f15025").all(10);
  const [list, setList] = useState(defaultColor);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(list);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section className="container">
        <h3>color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            ></SingleColor>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
