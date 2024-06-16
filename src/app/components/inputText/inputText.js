import { forwardRef } from "react";
import styleSheet from "./inputText.module.css"
const Input = forwardRef(({placeholder,el,className,type},ref) => {
    return (
        <div className={styleSheet.input + " " + className}>
            <div>{el}</div>
            <input type={type||"text"} placeholder={placeholder} ref={ref}></input>
        </div>
    );
});
Input.displayName = "Input";
export default Input;