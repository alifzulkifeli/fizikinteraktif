import React from 'react';
import SinglePage from '../singlePage';
import note1 from "./chap12.pdf"
export default function Note1() {
  
  return (
    <div className='h-screen'>
    <SinglePage pdf={note1} num={3} link='https://ch301.cm.utexas.edu/simulations/js/idealgaslaw/' />
  </div>
  );
}

