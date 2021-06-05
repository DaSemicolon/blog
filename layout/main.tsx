import style from "./main.module.scss";

const MainLayout: React.FC = ({children}) => (
  <div>
    <nav className={style.nav}>
      <h1 className={style.title}>dasemicolon.dev</h1>
    </nav>
    <div className={style.container}>
      {children}
    </div>
  </div> 
);

export default MainLayout;
