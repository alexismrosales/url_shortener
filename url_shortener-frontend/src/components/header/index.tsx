import style from "./styles.module.css";

const Header = () => {
  return (
    <nav className={style.container}>
      <h1 className={style.title}><a href="/url_shortener/"><span className={style.mainTitle}>ALXMR : </span> <span className={style.secondaryTitle}>URL shortener</span></a></h1>
      <a className={style.refLogo} href="https://github.com/alexismrosales/url_shortener">
        <img className={style.logo} src={process.env.PUBLIC_URL + "/img/logos/gh_white.png"} alt="github repository" />
      </a>
    </nav >
  );
}
export default Header;
