import SmallButton from "../button/smallButton";
import SubTitle from "../title/subTitle";
import Title from "../title/title";
import styleSheet from "./adCard.module.css";

import React from "react";

export default function AdCard({
  src,
  alt,
  title,
  details,
  btnText,
  className,
}) {
  return (
    <div className={styleSheet.adCard}>
      <div className={styleSheet.topContainer}>
        <div className={styleSheet.imgContainer} style={{backgroundImage:`url(${src})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
        <div className={styleSheet.text}>
          <Title text={title} className={styleSheet.titleSize} />
          <SubTitle text={details} className={styleSheet.detailsSize} />
        </div>
      </div>
      <SmallButton
        text={btnText || "Show Details"}
        className={styleSheet.smallButton}
      ></SmallButton>
    </div>
  );
}
