import logo_ct from '../../../img/homepage/logo-ct.png';
import logo_deloitte from '../../../img/homepage/logo-deloitte.png';
import logo_bosch from '../../../img/homepage/logo-bosch.png';
import logo_nm from '../../../img/homepage/logo-nm.png';
import logo_cemix from '../../../img/homepage/logo-cemix.png';

const LogoBox = () => {
  return (
    <div className="logobox">
      <img src={logo_ct} alt="logo ct" className="logobox__logo" />
      <img src={logo_deloitte} alt="logo deloitte" className="logobox__logo" />
      <img src={logo_bosch} alt="logo bosch" className="logobox__logo" />
      <img src={logo_nm} alt="logo nm" className="logobox__logo" />
      <img src={logo_cemix} alt="logo cemix" className="logobox__logo" />
    </div>
  );
};

export default LogoBox;
