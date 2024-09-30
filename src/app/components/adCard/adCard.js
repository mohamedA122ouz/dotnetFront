import { redirect } from "next/navigation";
import SmallButton from "../button/smallButton";
import SubTitle from "../title/subTitle";
import Title from "../title/title";
import styleSheet from "./adCard.module.css";
export default function AdCard({ src, alt, title, details, btnText, url }) {
  return (
    <div className={styleSheet.adCard}>
      <div className={styleSheet.topContainer}>
        <div className={styleSheet.imgContainer}>
          <img src={src} alt={alt} className={styleSheet.img}></img>
        </div>
      </div>
      <div className={styleSheet.text}>
        <Title text={title} className={styleSheet.titleSize} />
        <SubTitle text={details} className={styleSheet.detailsSize} />
      </div>
      {/* <SmallButton
        onClick={() => {
          redirect("/login");
        }}
        text={btnText || "Show Details"}
        className={styleSheet.smallButton}
      ></SmallButton> */}
    </div>
  );
}
