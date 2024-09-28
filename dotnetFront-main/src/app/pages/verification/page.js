"use client"
import BigButton from "@/app/components/button/bigButton";
import { imageHue, stateAction } from "@/app/components/controllingStuff/controllingStuff";
import Input from "@/app/components/inputText/inputText";
import Declearation from "@/app/components/title/declearation";
import { useRef } from "react";

export default function Verification() {
    let image = useRef(() => null);
    let input = useRef(() => null);
    function clicking() {
        stateAction("success", image.current, input.current);
    }
    return <div className="container">
        <img ref={image} className="img" src="../lock.png" alt="look image" />
        <Declearation className={"declaration"} title={"Verification"} subTitle={"Enter OTP sent to your mail ex****@host.com"} />
        <Input el={<img src="../key.svg" alt="test" />} ref={input} className="input" placeholder="Enter OTP"></Input>
        <BigButton onClick={clicking} className={"bigButton"} text={"continue"} />
    </div>
}