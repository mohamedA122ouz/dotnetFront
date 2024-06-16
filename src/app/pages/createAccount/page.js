"use client"
import BigButton from "@/app/components/button/bigButton";
import { stateAction } from "@/app/components/controllingStuff/controllingStuff";
import Input from "@/app/components/inputText/inputText";
import Declearation from "@/app/components/title/declearation";
import { useRef } from "react";
String.prototype.isEmail = function () {
    let mailRegex = /(\w|_|-)+@(\w|.)+/;
    return mailRegex.test(this)
}
String.prototype.isValidName = function () {
    return !this.trim().includes(" ") && this.length;
}
export default function CreateAccount() {
    let userName = useRef(() => null);
    let password = useRef(() => null);
    let email = useRef(() => null);
    let card = useRef(() => null);
    function verify() {
        if (!userName.current.value.isValidName()) {
            stateAction("faild", undefined, userName.current);
        }
        if (!userName.current.value.isEmail()) {
            stateAction("faild", undefined, email.current);
        }
        if (card.current.value.length < 11) {
            stateAction("faild", undefined, card.current);
        }
        if(password.current.length < 8){
            stateAction("faild", undefined, password.current);
        }
    }
    return (
        <div className="container c2">
            <Declearation  className="declaration" title="Create Account" subTitle="Enter needed data to continue" ></Declearation>
            <Input el={<img src="../person.svg" alt="test" />} className="input" placeholder="Username" ref={userName} key={"username"} />
            <Input el={<img src="../key.svg" alt="test" />} className="input" placeholder="Password" type="password" ref={password} key={"password"} />
            <Input el={<img src="../person.svg" alt="test" />} className="input" placeholder="Email" type="email" ref={email} key={"username"} />
            <Input className="input" type="number" placeholder="Credit card" ref={card} key={"username"} />
            <BigButton onClick={verify} text={"sign-up"} className={"bigButton"}></BigButton>
        </div>);
}