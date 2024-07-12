import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./utils/table.css";

import { ThemeProvider } from "@material-tailwind/react";

import { CharacterStatsContextProvider } from "./context/CharacterStatsContext.jsx";

//import "@picocss/pico";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CharacterStatsContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CharacterStatsContextProvider>
  </React.StrictMode>
);
