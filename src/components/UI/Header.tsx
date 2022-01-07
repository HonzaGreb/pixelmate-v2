// import logo_color from '../../img/pixelmate-color.png';
import logo_white from '../../img/pixelmate-white.png';

const Header = () => {
  return (
    <header className="header">
      <ul className="header__list">
        <img
          src={logo_white}
          alt="pixelmate logo"
          className="header__logo"
        ></img>

        <li className="header__item">
          <span className="header__link">Designéři</span>
        </li>
        <li className="header__item">
          <span className="header__link">Portfolio</span>
        </li>
        <li className="header__item">
          <span className="header__button">Přihlásit se</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
