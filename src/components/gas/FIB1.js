import React, { useState } from 'react'

export default function FIB1() {
  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")
  const [three, setThree] = useState("")
  const [four, setFour] = useState("")
  const [five, setFive] = useState("")
  const [six, setSix] = useState("")
  const [seven, setSeven] = useState("")
  const [eight, setEight] = useState("")
  const neutral = "rounded-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-20"
  const [sone, ssetOne] = useState(neutral)
  const [stwo, ssetTwo] = useState(neutral)
  const [sthree, ssetThree] = useState(neutral)
  const [sfour, ssetFour] = useState(neutral)
  const [sfive, ssetFive] = useState(neutral)
  const [ssix, ssetSix] = useState(neutral)
  const [sseven, ssetSeven] = useState(neutral)
  const [seight, ssetEight] = useState(neutral)
  const [error, setError] = useState("")
  const answer = ["rawak", "memenuhi", "dinding bekas", "bertambah", "bertambah", "dimalarkan", "tetap", "tinggi", "daya"]
  const right = "rounded-lg border-t mr-0 border-b border-l  font-semibold text-green-800 border-gray-200 bg-white w-20 "
  const wrong = "rounded-lg border-t mr-0 border-b border-l text-red-800 border-gray-200 bg-white w-20 "

  const handleClick = () => {
    if (one && two && three && four && five && six && seven && eight) {
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

      if (four === answer[3]) {
        ssetFour(right)
      } else {
        ssetFour(wrong)
        setFour(answer[3])
      }

      if (five === answer[4]) {
        ssetFive(right)
      } else {
        ssetFive(wrong)
        setFive(answer[4])
      }

      if (six === answer[5]) {
        ssetSix(right)
      } else {
        ssetSix(wrong)
        setSix(answer[5])
      }

      if (seven === answer[7]) {
        ssetSeven(right)
      } else {
        ssetSeven(wrong)
        setSeven(answer[7])
      }

      if (eight === answer[8]) {
        ssetEight(right)
      } else {
        ssetEight(wrong)
        setEight(answer[8])
      }

    } else {
      setError("Sila pastikan setiap bahagian telah di isi")
    }
  }


  return (
    <div className="h-auto bg-likepink">
      <h2 className="text-center text-xl font-extrabold font-monospace mb-5 || md:pt-16 ">AKTIVITI:  MEMERHATIKAN KELAKUAN MOLEKUL GAS MELALUI SIMULASI KOMPUTER</h2>
      <h2 className="text-center text-md font-medium font-monospace  mb-5 ">Dengan menggunakan bantuan simulasi kelakuan molekul gas tersebut, isikan jadual tersebut dengan jawapan yang sesuai.</h2>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" bg-likegray col-span-5 h-auto   p-5 ml-7">
          <p className=" text-center font-bold ">Pergerakan molekul gas</p>
        </div>
        <div className="  bg-likepurple  col-span-7 h-auto p-5 mx-7">
          <p>molekul gas bergerak secara  <input value={one} class={sone} onChange={(e) => { setOne(e.target.value) }} /> </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" bg-likegray col-span-5 h-auto   p-5 ml-7">
          <p className=" text-center font-bold ">Ruang yang diisi oleh molekul gas</p>
        </div>
        <div className="  bg-likepurple  col-span-7 h-auto p-5 mx-7">
          <p>molekul gas <input class={stwo} value={two} onChange={(e) => { setTwo(e.target.value) }} /> seluruh ruang bekas </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" bg-likegray col-span-5 h-auto   p-5 ml-7">
          <p className=" text-center font-bold ">Arah pergerakan molekul</p>
        </div>
        <div className="  bg-likepurple  col-span-7 h-auto p-5 mx-7">
          <p>molekul gas bergerak ke arah    <input value={three} class={sthree} onChange={(e) => { setThree(e.target.value) }} /> dan melantun semula </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" bg-likegray col-span-5 h-auto   p-5 ml-7">
          <p className=" text-center font-bold ">Kesan penambahan dan pengurangan tekanan, suhu dan isipadu gas terhadap kelakuan molekul</p>
        </div>
        <div className="  bg-likepurple  col-span-7 h-auto p-5 mx-7">
          <p>- Apabila gas dalam suatu bekas tertutup dipanaskan, kelajuan molekul gas semakin <input value={four} class={sfour} onChange={(e) => { setFour(e.target.value) }} /> <br /> <br />
            - Pergerakan molekul gas yang laju ini menyebabkan isi padu gas <input value={five} class={sfive} onChange={(e) => { setFive(e.target.value) }} /><br /><br />
            - Jika gas tersebut diletakkan di dalam bekas yang tertutup dan tidak boleh mengembang, isi padu gas tersebut adalah <input value={six} class={ssix} onChange={(e) => { setSix(e.target.value) }} /><br /><br />
            - Apabila isi padu gas dimalarkan, molekul gas yang berhalaju    <input value={seven} class={sseven} onChange={(e) => { setSeven(e.target.value) }} /> ini akan berlanggar dengan dinding bekas dengan lebih kerap<br /><br />
            - Perlanggaran antara molekul gas dan dinding bekas akan menghasilkan    <input value={eight} class={seight} onChange={(e) => { setEight(e.target.value) }} /> yang bertindak ke atas dinding bekas tersebut.   </p>
        </div>
      </div>
      {error && <p className="  text-center  text-red-400">{error} </p>}
      <div className="flex justify-center  pb-16">

        <button className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" onClick={handleClick} >Semak Jawapan</button>
      </div>

    </div>
  )
}


