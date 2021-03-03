import React, { useState } from 'react'
import NavBar2 from './boyle/Navbar2';
import Note2 from './boyle/Note2';
import Aktiviti2 from './boyle/Activity2';
import Latihan2 from './boyle/Latihan2';

export default function Boyle() {

  const [parentCounter, setParentCounter] = useState("Nota");
  return (
    <div>
      <NavBar2 setParentCounter={setParentCounter} />
      { parentCounter === "Nota" && <Note2 />}
      { parentCounter === "Aktiviti" && <Aktiviti2 />}
      { parentCounter === "Latihan" &&  <Latihan2/> }
    </div>

  )
}
