import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function MindMap() {
  return (
    <section id="MindMap" className=" "  >
      <h2 h2 className="text-center text-4xl font-extrabold font-monospace p-3 py-9 mb-7 || md:p-10" > PETA KONSEP</h2 >

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
