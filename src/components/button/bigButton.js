import getStyle from "./BigButton.module.css"

export default function BigButton({ text, onClick, smallStyle }) {
    return <button onClick={onClick} className={getStyle.customButton + " " + smallStyle || ""} >{text}</button>
}