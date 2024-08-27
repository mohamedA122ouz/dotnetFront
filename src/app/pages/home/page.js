"use client";
import AdCard from "@/app/components/adCard/adCard";
import connectServer from "@/app/components/connectServer/connectServer";
import ProfileCircle from "@/app/components/cameraCircle/cameraCircle";
import { userAgent } from "next/server";
import { useState, useEffect } from "react";
import style from "./homeStyle.module.css";
export default function Home() {
  let homeCards = {};
  // const [items, setItems] = useState(() => null);
  // useEffect(() => {
  //   connectServer("user/home")
  //     .then((res) => res.json())
  //     .then((resjson) => {
  //       setItems(resjson);
  //       console.log(resjson);
  //     });
  // }, []);
  let items = {
    userName: "Mohamed",
    list: {
      "Title1": ["subtitle", "go", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "a girl taking a photo"],
      "Title2": ["subtitle", "go", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "a girl taking a photo"],
      "Title3": ["subtitle", "go", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "a girl taking a photo"],
      "Title4": ["subtitle", "go", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "a girl taking a photo"],
      "Title5": ["subtitle", "go", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "a girl taking a photo"],
      "Title6": ["subtitle", "go", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg", "a girl taking a photo"],
    }
  }
  //connectServer
  //react hook useState homeCards -> json -JS Object-
  //for loop to add the cards to the home page
  return (
    <>
      {(function build() {
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
              />
            );
          }
        }
        return (
          <>
            <div className={style.head}>
              <ProfileCircle src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?size=626&ext=jpg&ga=GA1.1.1466922687.1724743897&semt=ais_hybrid" />
              <h4 className={style.welcomemsg}>
                Welcome,
                {(() => {
                  if (items === null || items.userName === "") {
                    return "user";
                  }
                  else
                    return items.userName;
                })()}
              </h4>
            </div>
            <div className={style.maincont}>{allCards}</div>
          </>
        );
      })()}
    </>
  );
}
