import styleSheet from "./title.module.css"
export default function Title({text,className}){
    return <p className={styleSheet.title + " "+ className} >{text}</p>
}