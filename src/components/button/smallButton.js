import BigButton from "./bigButton.js"
import smallBtn from "./smallButton.module.css"
export default function SmallButton({text,onClick}){
    return <BigButton text={text} onClick={onClick} smallStyle={smallBtn.small}></BigButton>
}