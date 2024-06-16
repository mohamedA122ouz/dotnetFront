"use client"
import BigButton from "@/app/components/button/bigButton";
import Input from "@/app/components/inputText/inputText";
import Declearation from "@/app/components/title/declearation";
import { useRef } from "react";
export default function CreateAccount() {
    let userName = useRef(()=>null);
    let password = useRef(()=>null);
    let email = useRef(()=>null);
    let card = useRef(()=>null);
    return(
    <div className="container c2">
        <Declearation className="declaration" title="Create Account" subTitle="Enter needed data to continue" ></Declearation>
        <Input className="input" placeholder="Username" ref={userName}key={"username"} />
        <Input className="input" placeholder="Password" ref={password}key={"username"} />
        <Input className="input" placeholder="Email" ref={email}key={"username"} />
        <Input className="input" placeholder="Credit card" ref={card}key={"username"} />
        <BigButton text={"sign-up"} className={"bigButton"}></BigButton>
    </div>);
}