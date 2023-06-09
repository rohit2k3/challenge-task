import React, { useState, useEffect } from "react";

const ThemePicker = () => {
  const themes = {
    default: {
      color1: "#DDEEED",
      color2: "#FDF1E0",
      color3: "#05BFDB",
      color4: "#fff",
    },
    purple: {
      color1: "#0C134F",
      color2: "#1D267D",
      color3: "#5C469C",
      color4: "#D4ADFC",
    },
    cream: {
      color1: "#F2CD5C",
      color2: "#F2921D",
      color3: "#A61F69",
      color4: "#EEE9DA",
    },
  };

  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    storedTheme ? JSON.parse(storedTheme) : themes.default
  );
  const [isOpen, setisOpen] = useState(false);

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setTheme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    document.body.style.setProperty("--bg-color", theme.color3);
    document.body.style.setProperty("--text-color", theme.color4);
    document.body.style.setProperty(
      "--gradient",
      `linear-gradient(239.26deg, ${theme.color1} 63.17%, ${theme.color2} 94.92%)`
    );
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div>
      <div className="flex justify-end m-2">
        <button
          onClick={() => setisOpen(!isOpen)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 px-4 py-2 text-textColor uppercase rounded text-xs tracking-wider"
        >
          Change Theme
        </button>
      </div>

      <div
        className={`${
          isOpen ? "visible" : "hidden"
        } bg-textColor p-2 z-40 rounded-md flex justify-center flex-col items-center absolute right-3 top-20`}
      >
        <div
          onClick={() => {
            setTheme(themes.default);
          }}
          id="theme1"
          className={`flex m-2 ${
            JSON.stringify(theme) === JSON.stringify(themes.default)
              ? "bg-blue-500"
              : ""
          }`}
        >
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.default.color1 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.default.color2 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.default.color3 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.default.color4 }}
          ></div>
        </div>

        <div
          id="theme2"
          onClick={() => {
            setTheme(themes.purple);
          }}
          className={`flex m-2 ${
            JSON.stringify(theme) === JSON.stringify(themes.purple)
              ? "bg-blue-500"
              : ""
          }`}
        >
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.purple.color1 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.purple.color2 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.purple.color3 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.purple.color4 }}
          ></div>
        </div>

        <div
          id="theme3"
          onClick={() => {
            setTheme(themes.cream);
          }}
          className={`flex m-2 ${
            JSON.stringify(theme) === JSON.stringify(themes.cream)
              ? "bg-blue-500"
              : ""
          }`}
        >
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.cream.color1 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.cream.color2 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.cream.color3 }}
          ></div>
          <div
            className="w-6 h-6 m-2 rounded-full"
            style={{ backgroundColor: themes.cream.color4 }}
          ></div>
        </div>

        <div
          onClick={() => {
            setTheme((prevState) => ({
              ...prevState,
              ...themes.custom,
            }));
          }}
          id="custom"
          className={`flex m-2 ${
            JSON.stringify(theme) === JSON.stringify(themes.custom)
              ? "bg-blue-500"
              : ""
          }`}
        >
          <input
            type="color"
            name="color1"
            value={theme.color1}
            onChange={handleColorChange}
            className="w-6 h-6 m-2 rounded-full"
          />
          <input
            type="color"
            name="color2"
            value={theme.color2}
            onChange={handleColorChange}
            className="w-6 h-6 m-2 rounded-full"
          />
          <input
            type="color"
            name="color3"
            value={theme.color3}
            onChange={handleColorChange}
            className="w-6 h-6 m-2 rounded-full"
          />
          <input
            type="color"
            name="color4"
            value={theme.color4}
            onChange={handleColorChange}
            className="w-6 h-6 m-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ThemePicker;
