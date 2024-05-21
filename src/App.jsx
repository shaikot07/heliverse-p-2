import Navbar from "./Home/navbar/Navbar"

import { useRef, useEffect } from 'react'
import Fluid from 'webgl-fluid'

function App() {
  const canvas = useRef(null);
  useEffect(() => {
    const c = canvas.current;
    Fluid(c);
  }, []);
  return (
    <>
      <div className="app">
        <canvas className="w-full "
          ref={canvas}
          
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          
        </div>
      </div>
    </>
  )
}

export default App
