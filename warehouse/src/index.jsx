import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Warehouse from './Warehouse'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <Warehouse />  
    </Canvas>
)