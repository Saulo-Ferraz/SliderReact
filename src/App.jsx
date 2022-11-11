import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {motion} from 'framer-motion'


import image1 from '../src/images/Carva1.jpg'
import image2 from '../src/images/Carva2.jpg'
import image3 from '../src/images/Carva3.jpg'
import image4 from '../src/images/Carva4.jpg'
import image5 from '../src/images/Carva5.jpg'
import image6 from '../src/images/Carva6.jpg'

const images = [image1, image2, image3, image4, image5, image6]

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])


  return (
    <>
       <h1> CARVALHEIRA <span style={{color:'#D9298A'}}>NA LADEIRA</span></h1>
      <p>Viva uma experiênia única no carnaval de olinda! Há cinco<br></br>
      anos, o Carvalheira na Ladeira atrai gente de todo o Brasil ao<br></br>
       coração da folia de Pernambuco para cinco dias intensos de<br></br>
        multiculturalidade, diversão e momentos inesquecíveis.</p>
        <h1><span style={{color:'#D9298A'}}>MEMÓRIAS</span></h1>
    <div className="App">
   

        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
          <motion.div className="inner"
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          initial={{ x: 100}}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          >

            {images.map(image => (
              <motion.div className= "item" key={image}>
                <img src={image} alt="Texto Alt"/>
                </motion.div>
            ))}

            </motion.div>
            </motion.div>
    </div>
    </>
  )
}

export default App
