import BigButton from "@/app/components/button/bigButton";
import Input from "@/app/components/inputText/inputText";
import Declearation from "@/app/components/title/declearation";

export default function Verification(){
    return <div className="container">
        <img className="img" src="../lock.png" alt="look image" />
        <Declearation className={"declaration"} title={"Verification"} subTitle={"Enter OTP sent to your mail ex****@host.com"} />
        <Input className="input" placeholder="Enter OTP"></Input>
        <BigButton className={"bigButton"} text={"continue"} />
    </div>
}