import React,{useState} from 'react'

export default function Latihan5() {
 const [answer, setAnswer] = useState(false)

  const handleClick = () => {
   setAnswer(true)
  }


  return (
    <div className="  justify-center md:block h-auto bg-likepink">
      <h2 className="text-center text-xl font-extrabold font-monospace mb-10 || pt-16 ">PENYELESAIAN MASALAH:</h2>
      {/* <h2 className="text-center text-md font-medium font-monospace  mb-5 ">Dengan menggunakan bantuan simulasi kelakuan molekul gas tersebut, isikan jadual tersebut dengan jawapan yang sesuai.</h2> */}

      {/* START  */}


 

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
        <p>1.	Sebuah belon kaji cuaca diisi dengan gas helium sehingga isi padu 30 liter dan tekanan 2 atm. Belon itu kemudiannya dilepaskan. Semasa belon itu bergerak naik ke atas langit, isi padunya bertambah. Berapakah tekanan gas helium apabila isi padu belon itu bertambah sehingga 110 liter?</p>
        </div>
      </div>

      {answer && <img className="object-contain  h-44 mx-auto my-4 pb-9" src="/img/001.png" alt="" />}

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
        <p>2. Satu silinder mengandungi 190 〖cm〗^3  gas pada suhu 29℃. Gas itu dipanaskan sehingga suhunya mencapai 45℃. Jika omboh silinder mengembang di bawah tekanan yang malar, berapakah isi padu akhir gas?</p>
        </div>
      </div>

      {answer && <img className="object-contain  h-44 mx-auto my-4 pb-9" src="/img/001.png" alt="" />}

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className=" col-span-1 "></div>
        <div className="  bg-likepurple rounded-xl  col-span-10 h-auto p-5 mx-7">
        <p>3.	Sebuah silinder tertutup mengandungi gas pada tekanan 5 atmosfera pada suhu 28℃. Cari tekanan gas di dalam silinder tersebut sekiranya suhu dinaikkan kepada 100℃?</p>
        </div>
      </div>
      {answer && <img className="object-contain  h-44 mx-auto my-4 pb-9" src="/img/001.png" alt="" />}
    
      <div className="flex justify-center  pb-16">

        <button className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" onClick={handleClick} >Semak Jawapan</button>
      </div>

    </div>
  )
}
