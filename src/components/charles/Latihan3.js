import React,{useState} from 'react'

export default function Latihan3() {
  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")
  const [three, setThree] = useState("")
  // const [four, setFour] = useState("")
  // const [five, setFive] = useState("")
  // const [six, setSix] = useState("")
  // const [seven, setSeven] = useState("")
  // const [eight, setEight] = useState("")
  const neutral = "rounded-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-20"
  const [sone, ssetOne] = useState(neutral)
  const [stwo, ssetTwo] = useState(neutral)
  const [sthree, ssetThree] = useState(neutral)
  // const [sfour, ssetFour] = useState(neutral)
  // const [sfive, ssetFive] = useState(neutral)
  // const [ssix, ssetSix] = useState(neutral)
  // const [sseven, ssetSeven] = useState(neutral)
  // const [seight, ssetEight] = useState(neutral)
  const [error, setError] = useState("")
  const answer = ["meningkat", "meningkat", "menurun", "rendah", "berkurang", "bertambah", "tinggi ", "rendah"]
  const right = "rounded-lg border-t mr-0 border-b border-l  font-semibold text-green-800 border-gray-200 bg-white w-20"
  const wrong = "rounded-lg border-t mr-0 border-b border-l text-red-800 border-gray-200 bg-white w-20"

  const handleClick = () => {
    if (one && two && three ) {//&& four && five && six && seven && eight
      if (one === answer[0]) {
        ssetOne(right)
      } else {
        ssetOne(wrong)
        setOne(answer[0])
      }

      if (two === answer[1]) {
        ssetTwo(right)
      } else {
        ssetTwo(wrong)
        setTwo(answer[1])
      }

      if (three === answer[2]) {
        ssetThree(right)
      } else {
        ssetThree(wrong)
        setThree(answer[2])
      }

      // if (four === answer[3]) {
      //   ssetFour(right)
      // } else {
      //   ssetFour(wrong)
      //   setFour(answer[3])
      // }

      // if (five === answer[4]) {
      //   ssetFive(right)
      // } else {
      //   ssetFive(wrong)
      //   setFive(answer[4])
      // }

      // if (six === answer[5]) {
      //   ssetSix(right)
      // } else {
      //   ssetSix(wrong)
      //   setSix(answer[5])
      // }

      // if (seven === answer[6]) {
      //   ssetSeven(right)
      // } else {
      //   ssetSeven(wrong)
      //   setSeven(answer[6])
      // }

      // if (eight === answer[7]) {
      //   ssetEight(right)
      // } else {
      //   ssetEight(wrong)
      //   setEight(answer[7])
      // }

    } else {
      setError("Sila pastikan setiap bahagian telah di isi")
    }
  }


  return (
    <div className="  justify-center md:block h-auto bg-likepink">
      <h2 className="text-center text-xl font-extrabold font-monospace mb-10 || pt-16 ">APLIKASI HUKUM CHARLES: BELON UDARA PANAS</h2>
      {/* <h2 className="text-center text-md font-medium font-monospace  mb-5 ">Dengan menggunakan bantuan simulasi kelakuan molekul gas tersebut, isikan jadual tersebut dengan jawapan yang sesuai.</h2> */}

      {/* START  */}
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
        <p>Belon udara panas mengandungi belon udara, bakul untuk membawa penumpang dan juga sumber bahan api seperti propane.</p>
        </div>
      </div>

  <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
          <p>Apabila pembakaran bahan api berlaku, suhu udara di dalam belon <input value={one} class={sone} onChange={(e) => { setOne(e.target.value) }} /> .</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
          <p>Apabila suhu udara meningkat, isi padu udara di dalam belon juga <input value={two} class={stwo} onChange={(e) => { setTwo(e.target.value) }} />. </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8 ">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl col-span-10 h-auto p-5 mx-7">
          <p>Apabila suhu udara meningkat, ketumpatan udara di dalam belon <input value={three} class={sthree} onChange={(e) => { setThree(e.target.value) }} />. </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
        <p>Hal ini menyebabkan belon udara menjadi lebih ringan daripada tekanan atmosfera di sekelilingnya.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
        <p>Daya apung menolak belon udara panas yang lebih ringan itu ke atas.</p>
        </div>
      </div>

      {error && <p className="  text-center  text-red-400">{error} </p>}
      <div className="flex justify-center  pb-16">

        <button className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" onClick={handleClick} >Semak Jawapan</button>
      </div>

    </div>
  )
}
