import { useState, useContext } from "react";
import { CharacterStatsContext } from "./context/CharacterStatsContext";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import { Menu } from "./components/menu/Menu";
import Summary from "./components/summary/Summary";
import { NavButton } from "./utils/NavButton";
import { Chapter1Page } from "./pages/Chapter1Page";
import { Chapter2Page } from "./pages/Chapter2Page";
import { Chapter3Page } from "./pages/Chapter3Page";
import { Chapter4Page } from "./pages/Chapter4Page";
import { Chapter5Page } from "./pages/Chapter5Page";
import { Chapter6Page } from "./pages/Chapter6Page";
import { Chapter7Page } from "./pages/Chapter7Page";
import { Chapter4aPage } from "./pages/Chapter4aPage";
import { Chapter8Page } from "./pages/Chapter8Page";
import { Chapter9Page } from "./pages/Chapter9Page";
import { Chapter10Page } from "./pages/Chapter10Page";

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
    <span>
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

  const navigateTo = useNavigate();

  const handleNext = () => {
    const currentPath = window.location.pathname;
    if (currentPath === "/kc-vite-app") {
      navigateTo("/kc-vite-app/chapter2");
    } else if (currentPath === "/kc-vite-app/chapter2") {
      navigateTo("/kc-vite-app/chapter3");
    } else if (currentPath === "/kc-vite-app/chapter3") {
      navigateTo("/kc-vite-app/chapter4");
    } else if (currentPath === "/kc-vite-app/chapter4") {
      navigateTo("/kc-vite-app/chapter4a");
    } else if (currentPath === "/kc-vite-app/chapter4a") {
      navigateTo("/kc-vite-app/chapter5");
    } else if (currentPath === "/kc-vite-app/chapter5") {
      navigateTo("/kc-vite-app/chapter6");
    } else if (currentPath === "/kc-vite-app/chapter6") {
      navigateTo("/kc-vite-app/chapter7");
    } else if (currentPath === "/kc-vite-app/chapter7") {
      navigateTo("/kc-vite-app/chapter8");
    } else if (currentPath === "/kc-vite-app/chapter8") {
      navigateTo("/kc-vite-app/chapter9");
    } else if (currentPath === "/kc-vite-app/chapter9") {
      navigateTo("/kc-vite-app");
    } else if (currentPath === "/kc-vite-app/chapter9") {
      navigateTo("/kc-vite-app");
    } else if (currentPath === "/kc-vite-app/chapter10") {
      navigateTo("/kc-vite-app");
    }
  };

  const handlePrevious = () => {
    const currentPath = window.location.pathname;
    if (currentPath === "/kc-vite-app") {
      navigateTo("/kc-vite-app/chapter10");
    } else if (currentPath === "/kc-vite-app/chapter10") {
      navigateTo("/kc-vite-app/chapter9");
    } else if (currentPath === "/kc-vite-app/chapter9") {
      navigateTo("/kc-vite-app/chapter8");
    } else if (currentPath === "/kc-vite-app/chapter8") {
      navigateTo("/kc-vite-app/chapter7");
    } else if (currentPath === "/kc-vite-app/chapter7") {
      navigateTo("/kc-vite-app/chapter6");
    } else if (currentPath === "/kc-vite-app/chapter6") {
      navigateTo("/kc-vite-app/chapter5");
    } else if (currentPath === "/kc-vite-app/chapter5") {
      navigateTo("/kc-vite-app/chapter4a");
    } else if (currentPath === "/kc-vite-app/chapter4a") {
      navigateTo("/kc-vite-app/chapter4");
    } else if (currentPath === "/kc-vite-app/chapter4") {
      navigateTo("/kc-vite-app/chapter3");
    } else if (currentPath === "/kc-vite-app/chapter3") {
      navigateTo("/kc-vite-app/chapter2");
    } else if (currentPath === "/kc-vite-app/chapter2") {
      navigateTo("/kc-vite-app");
    }
  };

  return (
    <main className="mt-12 ">
      <NavButton
        text={menuBtnText}
        handleClick={handleOpenMenuBtnState}
        className="lg:hidden  top-2 left-3 fixed z-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm w-36  py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />
      <NavButton
        text={summaryBtnText}
        handleClick={handleOpenSummaryBtnState}
        className="lg:hidden top-2 right-3 fixed z-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded text-sm w-36   py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />

      <NavButton
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
        handleClick={handlePrevious}
        className={context.navBtnStyle2}
      />

      <NavButton
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
        handleClick={handleNext}
        className="bottom-2 right-3 fixed z-50 text-brown-700 bg-brown-100 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded  w-24 h-12   py-1.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      />

      <div className="lg:grid  lg:grid-cols-8 gap-4 text-lg lg:text-sm">
        <div className="lg:hidden fixed z-50 top-12 left-4">{renderMenu()}</div>
        <div className="hidden lg:block lg:col-span-2">
          <Menu />
        </div>
        <div className="lg:col-span-6 bg-gray-100 rounded-sm w-100 m-2 p-8 pt-3 lg:p-12 bg-[url(/background_kc2.2.jpg)] bg-contain bg-repeat-round border-white border-8">
          <ScrollToTop />
          <Routes>
            <Route path="/kc-vite-app/" element={<Chapter1Page />}></Route>
            <Route
              path="/kc-vite-app/chapter2"
              element={<Chapter2Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter3"
              element={<Chapter3Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter4"
              element={<Chapter4Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter4a"
              element={<Chapter4aPage />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter5"
              element={<Chapter5Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter6"
              element={<Chapter6Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter7"
              element={<Chapter7Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter8"
              element={<Chapter8Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter9"
              element={<Chapter9Page />}
            ></Route>
            <Route
              path="/kc-vite-app/chapter10"
              element={<Chapter10Page />}
            ></Route>
          </Routes>
        </div>{" "}
        {/* <div className="lg:hidden fixed top-12  w-full">{renderSummary()}</div>
        <div className=" hidden lg:block  lg:col-span-2 lg:sticky top-0 ">
          <Summary />
        </div> */}
      </div>
    </main>
  );
}

export default App;
