import React from 'react';
import AllPages from '../allPages';
import SinglePage from '../singlePage';
import note1 from "./nota1.pdf"
export default function Note1() {
  
  return (
    <div >
    <h4>Single Page</h4>
    <SinglePage pdf={note1} />

    <hr />

    <h4>All Pages</h4>
    <div className="all-page-container">
      <AllPages pdf={note1} />
    </div>

    <hr />
  </div>
  );
}

