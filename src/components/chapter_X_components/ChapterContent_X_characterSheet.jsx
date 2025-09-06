import React, { useContext } from "react";
import { CharacterStatsContext } from "../../context/CharacterStatsContext";


export const ChapterContent_X_characterSheet = () => {
  return (
    <section className="section mb-20">
     
      <form className="">
        <div className="characterSheet_part1 relative m-auto">
          {" "}
          <div className="">
            {" "}
            <input
              id="username"
              type="text"
              name="username"
              placeholder="El Silvaran"
              className="absolute top-10 left-80 block min-w-0 w-28 grow bg-transparent pl-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Rasa"
              className="absolute top-10 right-96 block min-w-0 w-28 grow bg-transparent pl-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Płeć"
              className="absolute top-10 right-36  block min-w-0 w-28 grow bg-transparent pl-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>

        <div className="characterSheet_part2 relative m-auto">
          {" "}
          <div className="">
            {" "}
            <input
              id="username"
              type="text"
              name="username"
              placeholder="El Silvaran"
              className="absolute top-0 left-28 block min-w-0 w-28 grow bg-transparent pl-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Rasa"
              className="absolute top-10 left-96 block min-w-0 w-28 grow bg-transparent pl-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Płeć"
              className="absolute top-10 right-36  block min-w-0 w-28 grow bg-transparent pl-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>

        {/* <img
          id="map"
          src={characterSheet2}
          alt="map"
          className="m-auto shadow-2xl "
        /> */}
      </form>
    </section>
  );
};
