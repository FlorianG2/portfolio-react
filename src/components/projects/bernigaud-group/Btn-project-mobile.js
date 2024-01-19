import { Link } from 'react-router-dom';

function BtnBGMobile() {
  const url = 'https://www.instagram.com/bernigaudgroup/';

  return(
    <div className='flex justify-center'>
      <Link to={url} target="_blank" className='bg-dark' id='btn-project-mobile'>
        <p className='anonymous-pro-bold mid-txt'>Website</p>
      </Link>
    </div>
  )
}

export default BtnBGMobile
