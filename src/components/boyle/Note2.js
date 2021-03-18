import React from 'react'
import SinglePage from '../singlePage';
import note1 from "./chap2.pdf"


export default function Note2() {
  return (
    <div className='h-screen'>
      <SinglePage pdf={note1} num={3} link='https://media.pearsoncmg.com/bc/bc_0media_chem/chem_sim/kmt/KMT.php' file="https://drive.google.com/file/d/1atKAAzdkXO9RQTKZ9mKn9U41yp5iH3g3/view" num2={3}/>

    </div>
  )
}
