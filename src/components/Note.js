import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Note({ url }) {
  return (
    <div id="Note" className="  md:p-20 p-3 || md:h-auto"  >

      <div className=" md:hidden flex justify-center ">   <Zoom>
        <img
          alt="that wanaka tree"
          src={url}

          className=" object-contain "
        />
      </Zoom>
      </div>

      <img className=" md:block hidden" src={url} alt="" />

    </div >
  )
}
