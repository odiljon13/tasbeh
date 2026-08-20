import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [son, setson] = useState(0)
  
  const lechange = () => {
    const newSon = son + 1;
    setson(newSon);
    
    if (newSon === 33) {
      alert("Endi siz boshqa zikrga o'ting (Alhamdulillah)");
    } else if (newSon === 66) {
      alert("Endi siz boshqa zikrga o'ting (Allohu Akbar)");
    } else if (newSon === 99) {
      alert("Endi siz kalimani qaytaring...");
    } else if (newSon === 100) {
      setson(0);
    }
  }
    
  const lereset = () => {
    setson(0);
  }

  return (
    <div className="app-container">
      <div className="tasbeh-device">
        {/* Asosiy rasm */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamOMX8d6ZgtWbdg4Er2BpFWniVA6YX4LexO2UylohNqNVMJXUAvK5Ce4&s=10" 
          alt="Tasbeh" 
          className="tasbeh-bg"
        />
        
        {/* Raqam chiqadigan joy */}
        <div className="tasbeh-screen">
          {son}
        </div>

        {/* Katta COUNT tugmasi - sonni oshiradi */}
        <button className="btn-count" onClick={lechange} title="Sanash"></button>

        {/* Kichik RESET tugmasi - nolga tushiradi */}
        <button className="btn-reset" onClick={lereset} title="Nolga tushirish"></button>
      </div>
    </div>
  )
}

export default App