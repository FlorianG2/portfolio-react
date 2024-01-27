import React from 'react';
import UnderConstruction from '../under-construction90s-90s.gif'

function Working() {
  return(
    <div class="flex center screen">
      <div class="flex center flex-column">
        <h1 class="anonymous-pro-bold txt-center">Website under construction</h1>
        <img src={UnderConstruction} className='' alt="animated gif under construction" />
      </div>
    </div>
  )
}

export default Working
