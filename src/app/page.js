"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/bigButton";
import BigButton from "@/components/button/bigButton";
import SmallButton from "@/components/button/smallButton";
import Declearation from "@/components/title/declearation";
import Title from "@/components/title/title";
import TextArea from "@/components/textArea/textArea";
import Input from "@/components/inputText/inputText";
import { useRef, useState } from "react";
import UrlText from "@/components/urlText/urlText";
import AdCard from "@/components/adCard/adCard";

export default function Home() {
  //username and password
  let userName = useRef(()=>null);
  let password = useRef(()=>null);
  return (
    <>
    <img src="" alt=""></img>
    <Input ref={userName} placeholder={"Enter your username"} />
    <Input ref={password} placeholder={"Enter your password"} />
    <BigButton text={"sign in"} />
    </>
  )
}
