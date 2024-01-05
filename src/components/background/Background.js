import './Background.css'

function Background() {
  return(
    <div>
      <div className='flex screen'>
        <div className="bg-light left-part">
          <span className='circle bg-dark' id='circle-dark'></span>
        </div>
        <div className="bg-dark right-part">
          <span className='anonymous-pro-bold portfolio'>Portfolio</span>
          <span className='circle bg-white' id='circle-white'></span>
        </div>
      </div>
      <div className="bg-white btm-part">
      <span className='circle bg-light' id='circle-light'></span>
      </div>
    </div>
  )
}

export default Background
