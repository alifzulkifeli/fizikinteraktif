import React from 'react';
import SinglePage from '../singlePage';
import note1 from "./chap5.pdf"
export default function Note5() {
  return (
    <div className='h-screen'>
    <SinglePage pdf={note1} />
  </div>
  )
}
