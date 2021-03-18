import React from 'react'
import SinglePage from '../singlePage';
import note1 from "./chap4.pdf"

export default function Note4() {
  return (

    <div className='h-screen'>
    <SinglePage pdf={note1} num={3} link='https://ch301.cm.utexas.edu/simulations/js/idealgaslaw/' file="https://drive.google.com/file/d/14wE4Py7GA3-leg8BW5KvT-6ii_HBCups/view" num2={3}/>
    </div>

  )
}
