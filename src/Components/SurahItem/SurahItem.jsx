import "./SurahItem.css";
import React from "react";
import { Link } from "react-router-dom";

function SurahItem(props) {
  return (
    <Link to={`/surah/${props.number}`} className="Surah-Item">
      <div className="Surah-Number"> {props.number} </div>
      <div>
        <p className="Surah-Namee"> {props.name} </p>
        <p className="Surah-Namee">{props.englishName}</p>
      </div>
      <p> {props.numberOfAyahs} </p>
    </Link>
  );
}

export default SurahItem;
