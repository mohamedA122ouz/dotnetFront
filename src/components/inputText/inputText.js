import { forwardRef } from "react";
import styleSheet from "./inputText.module.css"
const Input = forwardRef(({placeholder,el,className},ref) => {
    return (
        <div className={styleSheet.input + " " + className}>
            <div>{el}</div>
            <input type="text" placeholder={placeholder} ref={ref}></input>
        </div>
    );
});
export default Input;