"use client";
import { useEffect, useRef, useState } from "react";
import AdCard from "../adCard/adCard";
import style from "./navigationBar.module.css";
const imagesURL = ["../settings.png","../statistics.png","../adsPage.png","../createAd.png","../createdAds.png"];
export default function Nav({ items }) {
  const [height, changeHeight] = useState(() => 500);
  const header = useRef(()=>null);
  useEffect(() => {
    changeHeight(innerHeight);
    window.addEventListener("resize", (ev) => {
      changeHeight(innerHeight);
    });
    console.log(header.current);
    header.current.style.width = `${header.current.offsetWidth}px`;
  }, []);
  //object <pro> object -> object
  let allCards = [];
  let ii = 0;
  if (items) {
    for (let i in items["list"]) {
      allCards.push(
        <AdCard
          alt={items["list"][i][3]}
          // src={items["list"][i][2]}
          title={i}
          key={i + ii++}
          details={items["list"][i][0]}
          btnText={items["list"][i][1]}
          url={items["list"][4]}
          src={imagesURL[ii+1]}
        />
      );
    }
  }

  return (
    <header className={style.header} style={{ height: `${height}px` }} ref={header}>
      <p onClick={()=>{header.current.style.width = `0px`;}}>XXXXX</p>
      <div className={style.profileholder}>
        <img
          src="https://png.pngitem.com/pimgs/s/155-1551272_league-of-legends-chibi-yasuo-hd-png-download.png"
          alt="notfound"
        ></img>
        <p>First Name</p>
      </div>
      <AdCard
        title={"App settings"}
        details={"Fonts and Themes and notlifications and so on"}
        src={imagesURL[0]}
      />
      {allCards}
    </header>
  );
}
