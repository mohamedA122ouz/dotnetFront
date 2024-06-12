import styleSheet from "./subTitle.module.css"
export default function SubTitle({text,className}){
    return <p className={styleSheet.subTitle+" "+className} >{text}</p>
}