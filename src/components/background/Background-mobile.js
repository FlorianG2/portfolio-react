import './Background.css'

function BackgroundMobile() {
  return(
    <div>
      <div className='flex screen'>
        <div className="bg-light left-part-mobile">
          <span className='circle-mobile bg-dark' id='circle-dark-mobile'></span>
        </div>
        <div className="bg-dark right-part-mobile">
          <span className='circle-mobile bg-light' id='circle-light-mobile'></span>
        </div>
      </div>
      <div className="bg-white btm-part-mobile">
      </div>
    </div>
  )
}

export default BackgroundMobile
