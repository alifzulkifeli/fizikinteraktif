
import LandingPage from './components/LandingPage';
import LamanUtama from './components/LamanUtama';
import Gas from './components/Gas';
import { useState } from 'react';
import MindMap1 from './components/gas/MindMap1';



function App() {

  const [currentTajuk, setCurrentTajuk] = useState("tajuk")
  const handleChange = (e) => {
    setCurrentTajuk(e.target.value)
  }
  return (
    <>
      <LandingPage />
      <LamanUtama />
      <MindMap1 />

      <div className="flex justify-center mt-11">
        <div class="relative inline-flex justify-center">
          <svg class="w-2 h-2 absolute top-0 right-0 m-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
          <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" onChange={handleChange} >
            <option value="tajuk" >Pilih Tajuk</option>
            <option value="gas">Hukum Gas</option>
            <option value="boyle" >Hukum Boyle</option>
            <option value="charles">Hukum Charles</option>
            <option value="lussac">Hukum Gay Lussac</option>

          </select>
        </div>
      </div>

      { currentTajuk === "tajuk" && <h1 className="text-center text-2xl font-extrabold font-monospace  text-red-700 p-3 py-9 mb-7 || md:p-10">Pilih Salah Satu Daripada Tajuk Diatas</h1>}
      { currentTajuk === "gas" && <Gas />}
      { currentTajuk === "boyle" && <h1>hello render boyle</h1>}
      { currentTajuk === "charles" && <h1>hello render charles</h1>}
      { currentTajuk === "lussac" && <h1>hello render lussac</h1>}

    </>

  );
}

export default App;
