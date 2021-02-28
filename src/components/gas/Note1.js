import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Note1() {
  return (
    <section id="Note" className="  || md:h-screen"  >

      <div className=" md:hidden flex justify-center ">   <Zoom>
        <img
          alt="that wanaka tree"
          src="/img/nota1.png"

          className=" object-contain "
        />
      </Zoom>
      </div>

      <img className=" md:block hidden" src="/img/nota1.png" alt="" />

    </section >
  )
}
