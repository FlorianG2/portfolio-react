import React from 'react';

import Bernigaud from '../projects/bernigaud-group/Bernigaud';
import AlmaVivaLab from '../projects/almavivalab/Almavivalab';
import './Slideshow.css'

const element = [<Bernigaud />, <AlmaVivaLab />]



function Slideshow() {
  const [index, setIndex] = React.useState(0);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {element.map((project, index) => (
          <div className="slide" key={index}>
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
