import SubTitle from "./subTitle.js";
import Title from "./title.js";

export default function Declearation({title,subTitle,className}){
    return(<div className={" " +className}>
        <Title text={title}></Title>
        <SubTitle text={subTitle}></SubTitle>
    </div>);
}