import Link from "next/link";
import style from "./main.module.scss";

const MainLayout: React.FC<{fullWidth?: boolean}> = ({children, fullWidth}) => {
  const containerStyle = fullWidth ? [style.container, style.fullWidth].join("") : style.container;
  return (
    <div className={style.mainContainer}>
      <nav className={style.nav}>
        <Link href="/"><h1 className={style.title}>dasemicolon.dev</h1></Link>
      </nav>
      <div className={containerStyle}>
        {children}
      </div>
      {!fullWidth && <footer className={style.footer}>
        <p>built with <span>❤</span> from scratch by <strong>Kavindu Wijesuriya</strong></p>
      </footer>}
    </div> 

  );
}; 

export default MainLayout;
