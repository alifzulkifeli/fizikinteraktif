import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Note({ url }) {
  return (
    <div id="Note" className="  md:p-10 p-3 h-auto"  >

      <div className=" md:hidden flex justify-center ">   <Zoom>
        <img
          alt="that wanaka tree"
          src={url}

          className="h-full object-contain"
        />
      </Zoom>
      </div>

      <img className=" md:block  h-100 mx-auto hidden" src={url} alt="" />

    </div >
  )
}
