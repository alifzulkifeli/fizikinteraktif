import React from 'react'
import SinglePage from '../singlePage';
import note1 from "./chap3.pdf"

export default function Note3() {
  return (
    <div className='h-screen'>
<SinglePage pdf={note1} num={3}  link='https://ch301.cm.utexas.edu/simulations/js/idealgaslaw/' file="https://drive.google.com/file/d/1UZYOqIAdbgbTufPA6BFS9z6oFMQPxBMH/view" num2={3}/>
    </div>
    
  )
}
