import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(","); //(255,255,255)
  //const hex = rgbToHex(...rgb);//use function
  //or use props hex from value
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearInterval(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 7 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }} //rgb(255,255,255)
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
