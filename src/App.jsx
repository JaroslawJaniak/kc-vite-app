import { useState, useContext } from "react";
import { CharacterStatsContext } from "./context/CharacterStatsContext";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Chapter1Page } from "./pages/Chapter1Page";
import { Chapter2Page } from "./pages/Chapter2Page";
import { Chapter3Page } from "./pages/Chapter3Page";
import { Chapter4Page } from "./pages/Chapter4Page";
import { Form } from "./pages/Form";
import { Menu } from "./components/menu/Menu";
import Summary from "./components/summary/Summary";
import { OpenCloseButton } from "./utils/OpenCloseButton";
import { PreviousNextButton } from "./utils/PreviousNextButton";

function App() {
  const context = useContext(CharacterStatsContext);

  const renderMenu = () => {
    if (context.openMenuBtnState) return <Menu />;
  };

  const renderSummary = () => {
    if (context.openSummaryBtnState) return <Summary />;
  };

  const handleOpenMenuBtnState = () => {
    context.setOpenMenuBtnState(!context.openMenuBtnState);
    context.setOpenSummaryBtnState(false);
  };

  const handleOpenSummaryBtnState = () => {
    context.setOpenSummaryBtnState(!context.openSummaryBtnState);
    context.setOpenMenuBtnState(false);
  };

  const summaryBtnText = (
    <span >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        <path
          d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
          fill="currentColor"
        />
      </svg>
      Summary
    </span>
  );

  const menuBtnText = (
    <span className="">
      Menu
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        <path
          d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );

  return (
    <main className="mt-8">
      <OpenCloseButton
        text={menuBtnText}
        handleClick={handleOpenMenuBtnState}
        className="top-2 left-3 fixed z-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm w-36  py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />
      <OpenCloseButton
        text={summaryBtnText}
        handleClick={handleOpenSummaryBtnState}
        className="top-2 right-3 fixed z-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm w-36   py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />

      <PreviousNextButton
        text={
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <path
              d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
              fill="currentColor"
            />
          </svg>
        }
        handleClick={handleOpenSummaryBtnState}
        className="bottom-2 left-3 fixed z-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm w-8   py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />

      <PreviousNextButton
        text={
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
              fill="currentColor"
            />
          </svg>
        }
        handleClick={handleOpenSummaryBtnState}
        className="bottom-2 right-3 fixed z-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm w-8   py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />

      <Router>
        <div className="fixed top-12">{renderMenu()}</div>

        <div className=" bg-gray-100 rounded w-4/5 mt-24 m-auto p-3">
          <Routes>
            <Route path="/chapter1" element={<Chapter1Page />}></Route>
            <Route path="/chapter2" element={<Chapter2Page />}></Route>
            <Route path="/chapter3" element={<Chapter3Page />}></Route>
            <Route path="/chapter4" element={<Chapter4Page />}></Route>
            <Route path="/" element={<Form />}></Route>
          </Routes>
        </div>
      </Router>
      <div className="summary-container fixed top-12 right-4">
        {renderSummary()}
      </div>
    </main>
  );
}

export default App;
