import "./Reciters.css";
import React from "react";
import recitersList from "./reciter.json";
import Reciter from "../../Components/Reciter/Reciter";
import Navbar from "../../Components/Navbar/Navbar";

function Reciters() {
  return (
    <>
      <Navbar />
      <div className="Reciters-G">
        <div className="text-reciter"> Quran Reciters </div>
        <div className="Reciters">
          {recitersList.data.map((reciter, index) => (
            <Reciter
              name={reciter.englishName}
              key={index}
              identifier={reciter.identifier}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Reciters;
