import logo_white from '../../img/pixelmate-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <p className="footer__p">
            &copy; All rights reserved 2013-2019. Pixelmate s.r.o.
          </p>
        </li>
        <li className="footer__item">
          <img src={logo_white} alt="pixelmate logo" className="footer__logo">
            Zásady ochrany osobních údajů
          </img>
        </li>
        <li className="footer__item">
          <p className="footer__p">Zásady ochrany osobních údajů</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
