import "./Home.css";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import SurahList from "../../Components/SurahList/SurahList";
import { useState, useEffect } from "react";

function Home() {
  const [surahs, setSurahs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  //console.log(searchList);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/meta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSurahs(data.data.surahs.references),
          setSearchList(data.data.surahs.references);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        search={search}
        setSearch={setSearch}
        surahs={surahs}
        setSearchList={setSearchList}
      />
      <SurahList surahs={surahs} searchList={searchList} search={search} />
    </>
  );
}

export default Home;
