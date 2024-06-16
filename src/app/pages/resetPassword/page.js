import BigButton from "@/app/components/button/bigButton";
import Input from "@/app/components/inputText/inputText";
import Declearation from "@/app/components/title/declearation";

export default function resetPassword(){
    return <div className="container">
        <Declearation className={"declaration"} title={"Reset Password"} subTitle={"Please enter your needed data"} />
        <Input className="input" placeholder="Enter Password"></Input>
        <Input className="input" placeholder="Re-Enter Password"></Input>
        <BigButton className={"bigButton"} text={"submit"} />
    </div>
}