import "./AyaItem.css";
import React from "react";

function AyaItem(props) {
  const image = `https://cdn.islamic.network/quran/images/high-resolution/${props.surahNumber}_${props.ayahNumber}.png`;
  const audio = `https://cdn.islamic.network/quran/audio/128/${props.reciter}/${props.generalAyaNumber}.mp3`;
  //console.log(audio);

  //console.log(props.ayahNumber);
  return (
    <div className="Ayah-Item" dir="rtl">
      <img className="Ayah-Image" src={image} alt="ayah" />
      <audio className="Audio" controls src={audio}></audio>
    </div>
  );
}

export default AyaItem;
