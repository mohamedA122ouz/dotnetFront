import styleSheet from "./cameraCircle.module.css";
export default function ProfileCircle({src}) {
  return(<div className={styleSheet.profile} style={{backgroundImage:`url(${src})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>);
}
