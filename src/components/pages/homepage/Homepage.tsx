import HeroText from './HeroText';
import HeroForm from './HeroForm';
import LogoBox from './LogoBox';
import Info from './Info';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero__photo"></div>
      <HeroText />
      <HeroForm />
      <LogoBox />
      <Info />
    </div>
  );
};

export default Homepage;
