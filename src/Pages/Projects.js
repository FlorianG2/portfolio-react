import Background from '../components/background/Background';
import BackgroundMobile from '../components/background/Background-mobile';
import Navbar from '../components/navbar/Navbar';
import Slideshow from '../components/slide/Slideshow';
import SlideshowMobile from '../components/slide/Slideshow-mobile'
import { useMediaQuery } from "react-responsive";


function Projects() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return(
    <div>
      {isDesktopOrLaptop && <ProjectsDesktop />}
      {isTabletOrMobile && <ProjectsMobile />}
    </div>
  )
}

function ProjectsDesktop() {
  return (
    <div>
      <Background />
      <Navbar />
      <Slideshow />
    </div>
  );
}

function ProjectsMobile() {
  return (
    <div>
      <BackgroundMobile />
      <Navbar />
      <SlideshowMobile />
    </div>
  );
}

export default Projects;
