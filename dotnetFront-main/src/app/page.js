"use client"
import { useRef, useState } from "react";
import Input from "./components/inputText/inputText";
import BigButton from "./components/button/bigButton";
import Title from "./components/title/title";
import SubTitle from "./components/title/subTitle";
import Declearation from "./components/title/declearation";
import UrlText from "./components/urlText/urlText";
import { stateAction } from "./components/controllingStuff/controllingStuff";
/**
*@param {object} json
*@param {string} endpoint
*@returns {Promise}
*/


export default function Home() {
  //username and password
  let userName = useRef(() => null);
  let password = useRef(() => null);
  let image = useRef(() => null);
  let fakeData = {
    username: "mohamed",
    password: "123",
  }
  function signIn() {
    // if (userName.current.value === fakeData.userName) {
    //   if (password.current.value === fakeData.password) {
    //     stateAction("success", image.current, userName.current, password.current);
    //   }
    //   else {
    //     stateAction("faild", image.current, userName.current, password.current);
    //   }
    // }
    // else {
    //   stateAction("faild", image.current, userName.current, password.current);
    // }
    stateAction("natural", image.current, userName.current, password.current);
    let loginObj = {
      username: userName.current.value,
      password: password.current.value,
      ConfrimPassword: password.current.value
    };
    connectServer(loginObj).then((res)=>{
      if(res.status === 200){
        stateAction("success", image.current, userName.current, password.current);
        return res.json();
      }
      else{
        stateAction("faild", image.current, userName.current, password.current);
      }
    })
  }
  return (
    <>
      <div className={"container"}>
        <img className={"img"} ref={image} src="../earth.png" alt="earth.png" />
        <Declearation title={"Login"} subTitle={"Sign-in to continue"} className={"declaration"} />
        <Input el={<img src="../person.svg" alt="personIcon" />} className={"input"} ref={userName} placeholder={"Enter your username"} />
        <Input el={<img src="../key.svg" alt="keyIcon" />} className={"input"} ref={password} type="password" placeholder={"Enter your password"} />
        <BigButton className={"bigButton"} text={"sign in"} onClick={signIn} />
        <UrlText className={"link"} href={{ pathname: "./pages/resetPassword" }} text={""} urlText={"Forgot password?"} />
      </div>
      <UrlText href={{ pathname: "./pages/createAccount" }} className={"signup"} text={"don't have accout!"} urlText={"sign-up"} />
    </>
  )
}
