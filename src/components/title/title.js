import styleSheet from "./title.module.css"
export default function Title({text}){
    return <p className={styleSheet.title} >{text}</p>
}