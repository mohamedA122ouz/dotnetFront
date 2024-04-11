import { forwardRef } from "react";
import styleSheet from "./inputText.module.css"
const Input = forwardRef(({placeholder,el},ref) => {
    return (
        <div className={styleSheet.input}>
            <div>{el}</div>
            <input type="text" placeholder={placeholder} ref={ref}></input>
        </div>
    );
});
export default Input;