import style from "./index.module.scss";

interface ButtonProps {
  type: "PRIMARY" | "SECONDARY";
  onClick?: () => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({type, onClick, children, disabled}) => {
  const buttonStyles = [style.container];
  if (type === "SECONDARY") {
    buttonStyles.push(style.secondary);
  }
  if (disabled) {
    buttonStyles.push(style.disabled);
  }

  return (
    <button onClick={onClick} className={buttonStyles.join(" ")}>{children}</button>
  );
};

export default Button;
