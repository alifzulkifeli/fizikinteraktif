import React, { useState } from 'react'
import NavBar from './NavBar';
import Note from './Note';
import Aktiviti from './Aktiviti';
import Kuiz from './Kuiz';

export default function Steicky() {
  const [parentCounter, setParentCounter] = useState("Nota");

  return (

    <div>
      <NavBar setParentCounter={setParentCounter} />
      { parentCounter === "Nota" && <Note />}
      { parentCounter === "Aktiviti" && <Aktiviti />}
      { parentCounter === "Kuiz" && <Kuiz />}
    </div>

  )
}
