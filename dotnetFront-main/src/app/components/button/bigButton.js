import getStyle from "./BigButton.module.css"

export default function BigButton({ text, onClick, className }) {
    console.log(className);
    return <button onClick={onClick} className={getStyle.customButton + " " + (className || "")} >{text}</button>
}