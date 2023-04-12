import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Rack from './Rack'
import Desk from './Desk'

export default function Experience()
{
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        
        <Rack position={ [0,0.5,3] } />
        <Rack position={ [3,0.5,3] } />
        <Rack position={ [6,0.5,3] } />

        <Rack position={ [0,0.5,-8] } />
        <Rack position={ [3,0.5,-8] } />
        <Rack position={ [6,0.5,-8] } />

        <Desk position={ [6,0.5,20] } />
        <mesh receiveShadow position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ [100, 100, 1] }>
            <planeGeometry />
            <meshStandardMaterial color="grey" />
        </mesh>
       
    </>
}