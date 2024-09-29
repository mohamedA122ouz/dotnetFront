"use client";
import AdCard from "@/app/components/adCard/adCard";
import connectServer from "@/app/components/connectServer/connectServer";
import ProfileCircle from "@/app/components/cameraCircle/cameraCircle";
import { useState, useEffect } from "react";
import style from "./homeStyle.module.css";
import { redirect } from "next/dist/server/api-utils";
import Nav from "@/app/components/navigationBar/navigationBar";
import { Main } from "next/document";
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
    <div className={style.mainbodycont}>
      <>
        <Nav items={items}></Nav>
        <div className={style.head}>
          <h4 className={style.welcomemsg}>
            Welcome,
            {(() => {
              if (items === null || items.userName === "") {
                return "user";
              } else return items.userName;
            })()}
          </h4>
        </div>
      </>
    </div>
  );
}
