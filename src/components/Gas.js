import React, { useState } from 'react'
import Aktiviti1 from './gas/Aktiviti1';
import Note1 from './gas/Note1';
import NavBar1 from './gas/NavBar1';



export default function Gas() {
  const [parentCounter, setParentCounter] = useState("Nota");

  return (

    <div>
      <NavBar1 setParentCounter={setParentCounter} />
      { parentCounter === "Nota" && <Note1 />}
      { parentCounter === "Aktiviti" && <Aktiviti1 />}
    </div>

  )
}
