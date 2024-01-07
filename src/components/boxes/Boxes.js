import './Boxes.css'
import UiUx from './UI_UX.png';
import CustomerPng from './customer.png'



function Boxes() {
  return(
    <div className='flex boxes'>
      <div className='box-size bg-dark anonymous-pro-bold mid-txt' id='box-web'>
        <div className='photo-box white-border'>
          <p>⟨﹒﹒﹒⟩</p>
        </div>
        <p>Web Development</p>
      </div>
      <div className='box-size anonymous-pro-bold mid-txt' id='box-ui'>
        <img src={UiUx} className='photo-box' alt="Ui & Ux" />
        <p>UI & UX Design</p>
      </div>
      <div className='box-size anonymous-pro-bold mid-txt' id='box-customer'>
        <img src={CustomerPng} className='photo-box' alt="Customer Management" />
        <p>Customer Management</p>
      </div>
    </div>
  )
}

export default Boxes
