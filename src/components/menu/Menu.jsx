import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { Link, NavLink } from "react-router-dom";
import styles from "./menu.module.css";

export const Menu = () => {
  const context = useContext(CharacterStatsContext);

  return (
    <section className={`${styles.sticky} p-4 bg-white`}>
      <nav>
        <ol>
          <ul className="[&>*]:my-2">
            <li>
              <NavLink
                to="/chapter1"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                I. WYBÓR RASY I PŁCI
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter2"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                II. LOSOWANIE POCHODZENIA
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter3"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter4"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                IV. WYBÓR PROFESJI
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/chapter5"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                V. LOSOWANIE WZROSTU I WAGI
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapter6"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                VI. LOSOWANIE WSPÓŁCZYNNIKÓW PODSTAWOWYCH
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                VII. PODSUMOWANIE PROCESU KREACJI NOWEJ POSTACI
              </NavLink>
            </li>
          </ul>
        </ol>
      </nav>
    </section>
  );
};
