import Background from '../components/background/Background';
import Navbar from '../components/navbar/Navbar';
import BtnContact from '../components/btn-contact/Btn-contact';
import Photo from '../components/photo/Photo';
import Text from '../components/text/Text';
import Boxes from '../components/boxes/Boxes';
import Links from '../components/links/Links';
import { useMediaQuery } from "react-responsive";

function About() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return(
    <div>
      {isDesktopOrLaptop && <AboutDesktop />}
      {isTabletOrMobile && <AboutMobile />}
    </div>
  )
}

function AboutDesktop() {
  return (
    <div>
      <Background />
      <Navbar />
      <BtnContact />
      <Text />
      <Photo />
      <Boxes />
      <Links />
    </div>
  );
}

function AboutMobile() {
  return (
    <div className='bg-dark screen flex center'>
      <p className='anonymous-pro-bold xlarge-txt'>Mobile version in progress</p>
    </div>
  );
}

export default About;
