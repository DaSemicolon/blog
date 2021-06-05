import style from "./index.module.scss";

const Intro: React.FC = () => (
  <div className={style.container}>
    <div className={[style.item, style.hi].join(" ")}>Hi!</div>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <div className={[style.item, style.name].join(" ")}>I'm <span className={style.orange}>Kavindu</span></div>
    <div className={[style.item, style.description].join(" ")}>your friendly full-stack developer</div>
    <img className={[style.item, style.techStack].join(" ")} src="/images/tech-stack.svg" alt="da_semicolon tech stack" />
  </div>
);

export default Intro;