import SubTitle from "./subTitle.js";
import Title from "./title.js";

export default function Decleartion({title,subTitle}){
    return(<div>
        <Title text={title}></Title>
        <SubTitle text={subTitle}></SubTitle>
    </div>);
}