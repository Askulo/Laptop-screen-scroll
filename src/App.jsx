import { Canvas } from '@react-three/fiber'
import './App.css'
import Lights from './Components/Lights'
import Suzanne from './Components/Suzanne'
import { OrbitControls } from '@react-three/drei'
import Experience from './Components/Experience'

function App() {

  return (
    <>
    <Canvas camera={{ position: [0, 2, 3] }}>
      <Lights />
      <Experience />
    
    </Canvas>
  </>
  )
}

export default App
