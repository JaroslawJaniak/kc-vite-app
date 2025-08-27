import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";
import { Link, NavLink } from "react-router-dom";
import styles from "./menu.module.css";

export const Menu = () => {
  const context = useContext(CharacterStatsContext);

  return (
    <section className={`${styles.sticky} p-4 bg-white select-none`}>
      <nav>
        <ol>
          <ul className="[&>*]:my-2">
            <li>
              <NavLink
                to="/kc-vite-app/chapter1"
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
                to="/kc-vite-app/chapter2"
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
                to="/kc-vite-app/chapter3"
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
                to="/kc-vite-app/chapter4"
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
              <NavLink
                to="/kc-vite-app/chapter4a"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "pl-2 transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                IV.a WYBÓR CHARAKTERU
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/kc-vite-app/chapter5"
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
                to="/kc-vite-app/chapter6"
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
                to="/kc-vite-app/chapter7"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                VII. ZAWODY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kc-vite-app/chapter8"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                VII. BIEGŁOŚCI
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kc-vite-app/chapter9"
                className={({ isActive }) =>
                  isActive
                    ? "pl-8 transition-all ease-in-out delay-250 text-red-800"
                    : "transition-all ease-in-out delay-250"
                }
                onClick={() => {
                  context.setOpenMenuBtnState(false);
                }}
              >
                IX. PODSUMOWANIE
              </NavLink>
            </li>
          </ul>
        </ol>
      </nav>
    </section>
  );
};
