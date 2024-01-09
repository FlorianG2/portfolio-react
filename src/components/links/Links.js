import './Links.css'
import { Link } from 'react-router-dom';
import PDF from '../../Florian_Guerin_Resume.pdf';

function Links() {
  return(
    <div className="links-bloc">
      <Link to="https://www.linkedin.com/in/florian-guerin-8b1091112/" target="_blank" className='link width-15vw block'>
        <p className="anonymous-pro">Linkedin</p>
      </Link>
      <Link to={PDF} target="_blank" className='link width-15vw block'>
        <p className="anonymous-pro">Curriculum Vitae</p>
      </Link>
    </div>
  )
}

export default Links
