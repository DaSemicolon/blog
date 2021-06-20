import style from "./index.module.scss";

const Tag: React.FC<{text: string}> = ({text}) => (
  <div className={style.container}>
    <div className={style.text}>
      {text}
    </div>
  </div>
);

export default Tag;