import "./Surah.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import AyaItem from "../../Components/AyaItem/AyaItem";
import reciters from "../../Pages/Reciters/reciter.json";

function Surah() {
  const params = useParams();
  const surahNumber = params.id;
  //console.log(surahNumber);

  const [surahName, setsurahName] = useState("");
  const [ayahs, setAyahs] = useState([]);
  //const [reciters, setReciters] = useState([]);
  const [actualReciter, setactualReciter] = useState("ar.alafasy");
  console.log(actualReciter);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah/" + surahNumber)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAyahs(data.data.ayahs), setsurahName(data.data.name);
      });
    /*
    fetch("https://api.alquran.cloud/v1/edition/format/audio")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReciters(data.data);
      });
      */
  }, []);

  function handleChange(e) {
    setactualReciter(e.target.value);
  }

  //console.log(reciters);
  //console.log(surahName);

  return (
    <>
      <Navbar />
      <div className="Ayahs_Surah">
        <div className="Surah-Name">{surahName}</div>
        <label htmlFor="pet-select">Reciters</label>

        <div className="custom-select">
          <select onChange={(e) => handleChange(e)} name="pets" id="pet-select" value={actualReciter}>
            {reciters.data.map((reciter, index) => (
              <option value={reciter.identifier} key={index}>
                {" "}
                {reciter.englishName}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="Ayahs">
          {ayahs.map((ayah, index) => (
            <AyaItem
              key={index}
              text={ayah.text}
              surahNumber={surahNumber}
              ayahNumber={ayah.numberInSurah}
              generalAyaNumber={ayah.number}
              reciter={actualReciter}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Surah;
