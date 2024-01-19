import { Link } from 'react-router-dom';

function BtnAVLMobile() {
  const url = 'https://www.instagram.com/almavivalab/';

  return(
    <div className='flex justify-center'>
      <Link to={url} target="_blank" className='bg-dark' id='btn-project-mobile'>
        <p className='anonymous-pro-bold mid-txt'>Website</p>
      </Link>
      {/* <div className='bg-dark' id='btn-project-mobile' onClick={openMailbox}>
        <p className='anonymous-pro-bold mid-txt'>View website</p>
      </div> */}
    </div>
  )
}

export default BtnAVLMobile
