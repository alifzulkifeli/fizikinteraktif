import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function MindMap1() {
  return (
    <section id="MindMap" className=" bg-likewhite p-10 "  >
      

      <div className="flex justify-center ">   <Zoom>
        <img
          alt="that wanaka tree"
          src="/img/mindmap.png"
          width="500"
          className=" object-contain "
        />
      </Zoom>

      </div>

    </section >

  )
}
