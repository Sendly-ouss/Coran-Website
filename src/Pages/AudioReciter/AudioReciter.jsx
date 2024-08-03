import "./AudioReciter.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router";
import AudioSurah from "../../Components/AudioSurah/AudioSurah";

function AudioReciter() {
  const params = useParams();
  const reciterId = params.id;

  const [surahs, setSurahs] = useState([]);
  console.log(reciterId);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/meta")
      .then((res) => {
        return res.json();
      })
      .then((data) => setSurahs(data.data.surahs.references));
  }, []);

  return (
    <>
      <Navbar />
      {surahs.map((surah, index) => (
        <AudioSurah key={index} surah={surah} reciterId={reciterId} />
      ))}
    </>
  );
}

export default AudioReciter;
