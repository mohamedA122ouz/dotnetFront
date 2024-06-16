"use client"
import { useRef, useState } from "react";
import Input from "./components/inputText/inputText";
import BigButton from "./components/button/bigButton";
import Title from "./components/title/title";
import SubTitle from "./components/title/subTitle";
import Declearation from "./components/title/declearation";
import UrlText from "./components/urlText/urlText";
import { controlAllElements } from "./components/controllingStuff/controllingStuff";


export default function Home() {
  //username and password
  let userName = useRef(() => null);
  let password = useRef(() => null);
  let image = useRef(() => null);
  let fakeData = {
    userName: "mohamed",
    password: "123"
  }
  function signIn() {
    if (userName.current.value === fakeData.userName) {
      if (password.current.value === fakeData.password) {
        controlAllElements(image.current, userName.current, password.current, "Success");
      }
      else {
        controlAllElements(image.current, userName.current, password.current, "faild");
      }
    }
    else {
      controlAllElements(image.current, userName.current, password.current, "faild");
    }
  }
  return (
    <>
      <div className={"container"}>
        <img className={"img"} ref={image} src="../earth.png" alt="earth.png" />
        <Declearation title={"Login"} subTitle={"Sign-in to continue"} className={"declaration"} />
        <Input className={"input"} ref={userName} placeholder={"Enter your username"} />
        <Input className={"input"} ref={password} type="password" placeholder={"Enter your password"} />
        <BigButton className={"bigButton"} text={"sign in"} onClick={signIn} />
        <UrlText className={"link"} href={"./"} text={""} urlText={"Forgot password?"} />
      </div>
      <UrlText className={"signup"} text={"don't have accout!"} urlText={"sign-up"} />
    </>
  )
}
