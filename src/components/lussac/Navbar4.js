import React,{ useState }  from 'react'

export default function Navbar4({ setParentCounter }) {
  const active = "no-underline text-teal-dark border-b-2 border-likestrongblue uppercase tracking-wide font-bold text-xs py-3 mr-8 focus:outline-none"
  const passive = "no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 "
  const [cls1, setCls1] = useState(active)
  const [cls2, setCls2] = useState(passive)
  const [cls3, setCls3] = useState(passive)


  const handleClick = (name) => {
    if (name === "Nota") {
      setCls1(active)
      setCls2(passive)
      setCls3(passive)

    } else if (name === "Aktiviti") {
      setCls1(passive)
      setCls2(active)
      setCls3(passive)
    }
    else if (name === "Latihan") {
      setCls1(passive)
      setCls2(passive)
      setCls3(active)
    }
    setParentCounter(name)
  }
  return (
    <nav className="bg-white px-8 pt-2 shadow-md sticky top-0">
      <div className="-mb-px flex justify-center">
        <button className={cls1} onClick={() => handleClick("Nota")}>
          Nota
        </button>
        <button className={cls2 + "hidden md:block"} onClick={() => handleClick("Aktiviti")}>
          Aktiviti
        </button>
        <button className={cls3} onClick={() => handleClick("Latihan")}>
        Latihan
        </button>
      </div>
    </nav>
  )
}
