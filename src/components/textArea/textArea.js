import { forwardRef } from "react";
import styleSheet from "./textArea.module.css";
const TextArea = forwardRef(({placeholder},ref)=>{
    return <textarea placeholder={placeholder} className={styleSheet.textArea} ref={ref}></textarea>;
})
export default TextArea;