import styleSheet from "./urlText.module.css";

export default function UrlText({text,urlText,href,target}){
    return <p className={styleSheet.url}>{text}&nbsp;<a href={href} target={target}>{urlText}</a></p>
}