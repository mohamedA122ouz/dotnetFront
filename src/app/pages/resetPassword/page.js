"use client"
import BigButton from "@/app/components/button/bigButton";
import { stateAction } from "@/app/components/controllingStuff/controllingStuff";
import Input from "@/app/components/inputText/inputText";
import Declearation from "@/app/components/title/declearation";
import { useRef } from "react";

export default function resetPassword(){
    let password1 = useRef(()=>null);
    let password2 = useRef(()=>null);
    function checkPassword(){
        if(password1.current.value === password2.current.value){
            stateAction("success",undefined,password2.current,password1.current);
        }
        else{
            stateAction("natural",undefined,password1.current);
            stateAction("faild",undefined,password2.current);
        }
    }
    return <div className="container">
        <Declearation className={"declaration"} title={"Reset Password"} subTitle={"Please enter your needed data"} />
        <Input ref={password1} el={<img src="../key.svg" alt="test" />} type="password" className="input" placeholder="Enter Password"></Input>
        <Input ref={password2} el={<img src="../key.svg" alt="test" />} type="password" className="input" placeholder="Re-Enter Password"></Input>
        <BigButton onClick={checkPassword} className={"bigButton"} text={"submit"} />
    </div>
}