import './Boxes.css'
import UiUx from './UI_UX.png';
import CustomerPng from './customer.png'



function BoxesMobile() {
  return(
    <div className='btm-part-mobile'>
      <div className='flex boxes-mobile'>
        <div className='box-size-mobile bg-dark anonymous-pro-bold mid-txt' id='box-web'>
          <div className='photo-box white-border'>
            <p>⟨﹒﹒﹒⟩</p>
          </div>
          <p>Web Development</p>
        </div>
        <div className='box-size-mobile anonymous-pro-bold mid-txt' id='box-ui'>
          <img src={UiUx} className='photo-box' alt="Ui & Ux" />
          <p>UI & UX Design</p>
        </div>
        <div className='box-size-mobile anonymous-pro-bold mid-txt' id='box-customer'>
          <img src={CustomerPng} className='photo-box' alt="Customer Management" />
          <p>Customer Management</p>
        </div>
      </div>
    </div>
  )
}

export default BoxesMobile
