
import React, { useState } from 'react'
import Navbar5 from './last/Navbar5';
import Note5 from './last/Note5';
import Aktiviti5 from './last/Aktiviti5';
import Kuiz from './last/Kuiz';


export default function Last() {
  const [parentCounter, setParentCounter] = useState("Nota");
  return (
    <div>
    <Navbar5 setParentCounter={setParentCounter} />
    { parentCounter === "Nota" && <Note5 />}
    { parentCounter === "Aktiviti" && <Aktiviti5 />}
    { parentCounter === "Kuiz" && <Kuiz />}
  </div>
  )
}
