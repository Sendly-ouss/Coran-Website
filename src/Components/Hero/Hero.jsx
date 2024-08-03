import "./Hero.css";
import React from "react";
import heroImage from "../../images/hero-image.png";

function Hero({ search, setSearch, surahs, setSearchList }) {
  //console.log(search);

  function arabicClr(text) {
    return text.replace(/َ|ً|ُ|ٌ|ّ|ٍ|ِ|ْ|ٰ|ٓ|ـ/g, "");
  }
  const serachedAr = surahs.filter((surah) =>
    arabicClr(surah.name).includes(search)
  );
  // console.log(arabicClr(search));

  const serachedEng = surahs.filter((surah) =>
    surah.englishName.toLowerCase().includes(search.toLowerCase())
  );

  function handleChangeAr(e) {
    setSearch(e.target.value);
    setSearchList(serachedAr);
  }
  function handleChangeEng(e) {
    setSearch(e.target.value);
    setSearchList(serachedEng);
  }

  ///*
  // for englishname filter

  //*/

  return (
    <div className="Hero">
      <div className="image">
        <img className="hero-image" src={heroImage} alt="Quoran" />
      </div>
      <div className="search">
        <input
          id="surahSearch"
          className="Hero-input"
          type="search"
          placeholder="اسم السورة"
          onChange={(e) => handleChangeAr(e)}
          dir="rtl"
        />
      </div>
      <div className="search">
        <input
          id="surahSearch"
          className="Hero-input"
          type="search"
          placeholder="Surah Name"
          onChange={(e) => handleChangeEng(e)}
        />
      </div>
    </div>
  );
}

export default Hero;
