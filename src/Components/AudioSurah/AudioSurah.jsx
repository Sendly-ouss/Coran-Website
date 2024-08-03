import "./AudioSurah.css";
import React, { useState } from "react";

function AudioSurah(props) {
  const audio = `https://cdn.islamic.network/quran/audio-surah/128/${props.reciterId}/${props.surah.number}.mp3`;
  //console.log(audio);
  //console.log(props.surah.number);

  //console.log(props.ayahNumber);

  const [audioSrc, setAudioSrc] = useState(null);
  return (
    <div className="Ayah-Item" dir="rtl">
      <div> {props.surah.name} </div>
      <audio className="Audio" controls src={audioSrc}></audio>
    </div>
  );
}

export default AudioSurah;
