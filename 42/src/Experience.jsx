import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.jsx'

extend({ OrbitControls: OrbitControls }) 

export default function Eperience() 
{
    const {camera, gl} = useThree()
    const groupRef = useRef()
    const cubeRef = useRef()
    
    useFrame((state, delta)=>{ 
        //console.log(delta)
        //groupRef.current.rotation.y += delta
    })

    return <>
        <orbitControls args={ [camera, gl.domElement] }/> 
        <directionalLight position={[ 1,2,3 ]} intensity={ 1.5 }/>
        <ambientLight intensity={ 0.5 } />
        <group ref={groupRef}>
            <mesh position-x={ -2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh ref={cubeRef} rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </group>
        <CustomObject />
        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}