import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./index.module.scss";

const SocialIcon: React.FC<{icon: IconDefinition, link: string, text?: string}> = ({icon, link, text}) => (
  <a href={link} target="_blank" rel="noreferrer" className={style.container}>
    <FontAwesomeIcon icon={icon }/>
    <div className={style.text}>{text}</div>
  </a>
);

export default SocialIcon;
