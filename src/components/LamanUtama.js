import React from 'react'

export default function LamanUtama() {
  return (
    <section id="LamanUtama" className="  bg-gray-100 || md:h-screen"  >
      <h2 className="text-center text-4xl font-extrabold font-monospace p-3 py-9 mb-7 || md:p-10">LAMAN UTAMA</h2>
      <div className="grid grid-cols-5 md:grid-cols-12 gap-4">
        <div className=" col-span-5  bg-likepurple h-auto p-7 || md:col-span-7 md:ml-6 mx-3 ">

          <h3 className="text-center font-medium text-2xl tex ">Standard Pembelajaran:</h3>
          <br />
          <p className="text-xl">Di akhir pembelajaran, murid dapat:
          <br /><br />
          1. Menerangkan tekanan, suhu dan isi padu gas
          dari segi kelakuan molekul gas berdasarkan
          Teori Kinetik Gas.
          <br /><br />
          2. Mengeksperimen untuk menentukan
          hubungan antara tekanan dan isi padu bagi
          suatu gas berjisim tetap pada suhu malar.
          <br /><br />
          3. Mengeksperimen untuk menentukan
          hubungan antara isi padu dan suhu bagi
          suatu gas berjisim tetap pada tekanan malar.
          <br /><br />
          4. Mengeksperimen untuk menentukan
          hubungan antara tekanan dan suhu bagi
          suatu gas berjisim tetap pada isi padu malar.
          <br /><br />
          5. Menyelesaikan masalah melibatkan tekanan,
          suhu dan isi padu suatu gas berjisim tetap
          dengan menggunakan rumus dari Hukum
          Gas.
          </p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-3 md:col-span-3  justify-center inline-block ">

          <div className="bg-likestrongblue  m-3 p-2 text-white text-xl   rounded-lg ">
            <p className="text-center">Tekanan, Suhu dan Isipadu Gas</p>
          </div>

          <div className="bg-likestrongblue   m-3 p-2  text-white text-xl   rounded-lg ">
            <p className="text-center">Hubungan antara Tekanan dengan Isipadu bagi Suatu Gas</p>
          </div>

          <div className="bg-likestrongblue   m-3 p-2  text-white text-xl   rounded-lg ">
            <p className="text-center">Hubungan antara Isipadu dengan Suhu bagi Suatu Gas</p>
          </div>

          <div className="bg-likestrongblue   m-3 p-2  text-white text-xl   rounded-lg ">
            <p className="text-center">Hubungan antara Tekanan dengan Suhu bagi Suatu Gas</p>
          </div>

          <div className="bg-likestrongblue   m-3 p-2  text-white text-xl   rounded-lg ">
            <p className="text-center">Penyelesaikan masalah melibatkan tekanan,
            suhu dan isi padu suatu gas berjisim tetap
            dengan menggunakan rumus dari Hukum
Gas.</p>
          </div>

        </div>
      </div>
    </section >
  )
}
