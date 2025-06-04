import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainForm   from './pages/MainForm';
import ThanksForm from './pages/ThanksForm';

function App() {
  const [selectBtn, setSelectBtn] = useState(0);
  console.log(selectBtn)
  return (
    <main className='main'>
      <div className="mainContainer">
        <BrowserRouter>
          <Routes>
            <Route path="*"      element={<MainForm onSelectBtn={setSelectBtn} />} />
            <Route path="thanks" element={<ThanksForm selectBtn={selectBtn} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
