import Link from "next/link";
import styleSheet from "./urlText.module.css";

export default function UrlText({text,urlText,href,target,className}){
    return <p className={styleSheet.url + " " +(className||"")}>{text}{text?" ":""}<Link href={href || "./"} target={target}>{urlText}</Link></p>
}