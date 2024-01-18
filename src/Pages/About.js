import Background from '../components/background/Background';
import BackgroundMobile from '../components/background/Background-mobile';
import Navbar from '../components/navbar/Navbar';
import BtnContact from '../components/btn-contact/Btn-contact';
import BtnContactMobile from '../components/btn-contact/Btn-contact-mobile';
import Photo from '../components/photo/Photo';
import PhotoMobile from '../components/photo/Photo-mobile';
import Text from '../components/text/Text';
import TextMobile from '../components/text/Text-mobile';
import Boxes from '../components/boxes/Boxes';
import BoxesMobile from '../components/boxes/Boxes-mobile';
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
    <div>
      <BackgroundMobile />
      <Navbar />
      <TextMobile />
      <PhotoMobile />
      <BtnContactMobile />
      <BoxesMobile />
    </div>
  );
}

export default About;
