import React, { useState } from 'react'
import Navbar3 from './charles/Navbar3';
import Note3 from './charles/Note3';
import Aktiviti3 from './charles/Aktiviti3';
import Latihan3 from './charles/Latihan3';


export default function Charles() {
  const [parentCounter, setParentCounter] = useState("Nota");
  return (
    <div>
      <Navbar3 setParentCounter={setParentCounter} />
      { parentCounter === "Nota" && <Note3 />}
      { parentCounter === "Aktiviti" && <Aktiviti3 />}
      { parentCounter === "Latihan" && <Latihan3 />}
    </div>

  )
}
