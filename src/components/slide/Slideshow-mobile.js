import React from 'react';
import BernigaudMobile from '../projects/bernigaud-group/Bernigaud-mobile';
import AlmaVivaLabMobile from '../projects/almavivalab/Almavivalab-mobile';
import './Slideshow.css'

const element = [<BernigaudMobile />, <AlmaVivaLabMobile />]



function Slideshow() {
  const [index, setIndex] = React.useState(0);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(0, ${-index * 100}%, 0)` }}
      >
        {element.map((project, index) => (
          <div className="slide-mobile" key={index}>
            {project}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {element.map((_, idx) => (
          <div
          key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
