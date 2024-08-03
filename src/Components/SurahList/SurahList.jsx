import SurahItem from "../SurahItem/SurahItem";
import "./SurahList.css";

function SurahList({ surahs, searchList, search }) {
  return (
    <div className="Surah-List">
      {search
        ? searchList.map((oneSurah, index) => (
            <SurahItem
              number={oneSurah.number}
              name={oneSurah.name}
              englishName={oneSurah.englishName}
              numberOfAyahs={oneSurah.numberOfAyahs}
              key={index}
            />
          ))
        : surahs.map((oneSurah, index) => (
            <SurahItem
              number={oneSurah.number}
              name={oneSurah.name}
              englishName={oneSurah.englishName}
              numberOfAyahs={oneSurah.numberOfAyahs}
              key={index}
            />
          ))}
    </div>
  );
}
export default SurahList;
