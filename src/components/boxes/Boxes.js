import './Boxes.css'

function Boxes() {
  return(
    <div className='flex boxes'>
      <div className='box-size bg-dark' id='box-web'>
      </div>
      <div className='box-size' id='box-ui'>
      </div>
      <div className='box-size' id='box-customer'>
      </div>
    </div>
  )
}

export default Boxes
