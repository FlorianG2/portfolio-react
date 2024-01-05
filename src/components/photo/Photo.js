import './Photo.css'
import PhotoMe from './Photo.png';

function Photo() {
  return(
    <div>
      <div id='photo-me'>
        <img src={PhotoMe} className='photo-size' alt="my profil" />
      </div>
    </div>
  )
}

export default Photo
