import './Photo.css'
import PhotoMe from './Photo.png';

function PhotoMobile() {
  return(
    <div className='btm-part'>
      <div id='photo-me-mobile'>
        <img src={PhotoMe} className='photo-size-mobile' alt="my profil" />
      </div>
    </div>
  )
}

export default PhotoMobile
