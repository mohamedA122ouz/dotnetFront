import { forwardRef, useState } from "react";
import styleSheet from "./inputText.module.css";
const Input = forwardRef(({ placeholder, el, className, type }, ref) => {
    let [showPass, change] = useState(() => type);
    return (
        <div className={styleSheet.input + " " + className}>
            <div>{el}</div>
            <input type={showPass || "text"} placeholder={placeholder} ref={ref}></input>
            {type === "password" ? <div style={{ marginLeft: "-10px", marginRight: "10px", cursor: "pointer" }} onClick={()=>change(e => {
                if (e === "password")
                    return "text";
                else
                    return "password";
            })}><img src={showPass === "password" ? "../eye.svg" : "../eye-slash.svg"} alt="show Password" /></div> : ""}
        </div>
    );
});
Input.displayName = "Input";
export default Input;