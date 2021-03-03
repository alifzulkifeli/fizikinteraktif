import React, { useState }  from 'react'
import Navbar4 from './lussac/Navbar4';
import Note4 from './lussac/Note4';
import Aktivit4 from './lussac/Aktivit4';
import Latihan4 from './lussac/Latihan4';

export default function Lussac() {
  const [parentCounter, setParentCounter] = useState("Nota");
  return (
    <div>
      <Navbar4 setParentCounter={setParentCounter} />
      { parentCounter === "Nota" && <Note4 />}
      { parentCounter === "Aktiviti" && <Aktivit4 />}
      { parentCounter === "Latihan" && <Latihan4 />}
    </div>

  )
}
