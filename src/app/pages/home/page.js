"use client";
import AdCard from "@/app/components/adCard/adCard";
import connectServer from "@/app/components/connectServer/connectServer";
import ProfileCircle from "@/app/components/cameraCircle/cameraCircle";
import { userAgent } from "next/server";
import { useState, useEffect } from "react";
import style from "./homeStyle.module.css";
export default function Home() {
  let homeCards = {};
  const [items, setItems] = useState(() => null);
  useEffect(() => {
    connectServer("user/home")
      .then((res) => res.json())
      .then((resjson) => {
        setItems(resjson);
        console.log(resjson);
      });
  }, []);
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
            <ProfileCircle
              element={
                <img
                  src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?size=626&ext=jpg&ga=GA1.1.1466922687.1724743897&semt=ais_hybrid"
                  alt="camera"
                />
              }
            />
            <h4 className={style.welcomemsg}>
              Welcome,
              {() => {
                if (items !== null) {
                  return items.userName;
                } else return "user";
              }}
            </h4>
            <div className={style.maincont}>{allCards}</div>
          </>
        );
      })()}
    </>
  );
}
