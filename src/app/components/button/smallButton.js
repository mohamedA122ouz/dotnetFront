import BigButton from "./bigButton.js"
import smallBtn from "./smallButton.module.css"
export default function SmallButton({text,onClick,className}){
    console.log(className);
    return <BigButton text={text} onClick={onClick} className={smallBtn.small + " "+(className||"")}></BigButton>
}