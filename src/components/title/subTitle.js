import styleSheet from "./subTitle.module.css"
export default function SubTitle({text}){
    return <p className={styleSheet.subTitle} >{text}</p>
}