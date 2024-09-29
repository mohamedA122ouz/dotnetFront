import AdCard from "../adCard/adCard";
import style from "./navigationBar.module.css";

export default function Nav({ items }) {
  //object <pro> object -> object
  let allCards = [];
  let ii = 0;
  if (items) {
    for (let i in items["list"]) {
      allCards.push(
        <AdCard
          alt={items["list"][i][3]}
          src={items["list"][i][2]}
          title={i}
          key={i + ii++}
          details={items["list"][i][0]}
          btnText={items["list"][i][1]}
          url={items["list"][4]}
        />
      );
    }
  }
  console.log(allCards);
  return (
    <header class={style.header}>
      <div class={style.profileholder}>
        <img
          src="https://png.pngitem.com/pimgs/s/155-1551272_league-of-legends-chibi-yasuo-hd-png-download.png"
          alt="notfound"
        ></img>
        <p>First Name</p>
      </div>
      <AdCard
        title={"App settings"}
        details={"Fonts and Themes and notlifications and so on"}
        src={
          "https://png.pngitem.com/pimgs/s/155-1551272_league-of-legends-chibi-yasuo-hd-png-download.png"
        }
      ></AdCard>
      {allCards}
    </header>
  );
}
