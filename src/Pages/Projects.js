import Background from '../components/background/Background';
import Navbar from '../components/navbar/Navbar';
import Slideshow from '../components/slide/Slideshow';
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
    <div className='bg-dark screen flex center'>
      <p className='anonymous-pro-bold xlarge-txt'>Mobile version in progress</p>
    </div>
  );
}

export default Projects;
