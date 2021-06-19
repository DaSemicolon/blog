import { createRef, useEffect } from "react";
import style from "./index.module.scss";

const Intro: React.FC = () => {
  const descriptionRef = createRef<HTMLDivElement>(); 
  useEffect(() => {
    setInterval(() => {
      descriptionRef.current.classList.toggle(style.description);
      setTimeout(() => {
        descriptionRef.current.classList.toggle(style.description);
      }, 500);
    }, 7000);
  }, []);
  return (
    <div className={style.container}>
      <div className={[style.item, style.hi].join(" ")}>Hi!</div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className={[style.item, style.name].join(" ")}>I'm <span className={style.orange}>Kavindu</span></div>
      <div ref={descriptionRef} className={[style.item, style.description].join(" ")}></div>
      <img className={[style.item, style.techStack].join(" ")} src="/images/tech-stack.svg" alt="da_semicolon tech stack" />
    </div>
  );  
};

export default Intro;