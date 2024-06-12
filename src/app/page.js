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
  let textArea = useRef(null);
  let input = useRef(null);
  let [state,update] = useState(()=>null);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <SmallButton text={"Update Card"} onClick={()=>{
        update(Math.random());
      }}></SmallButton>
      <BigButton text={"Button"} onClick={()=>{
        window.alert(input.current.value)
      }}></BigButton>
      <Declearation title={"Welcome"} subTitle={"this is welcome screen"}/>
      <Title text={"this is test"}></Title>
      <Input placeholder={"test"} ref={input} el={<img src="./favicon.ico"/>}></Input>
      <TextArea ref={textArea} placeholder="Enter any Text!!"></TextArea>
      <BigButton text="this is button"></BigButton>
      <UrlText text={"don't forget"} urlText={"start"} href={"#"} target={"_blank"}></UrlText>
      <AdCard title={(input.current.value || "welcome")} alt={"this is a test"} details={(textArea.current.value || "add details")} src={"./favicon.ico"}></AdCard>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
