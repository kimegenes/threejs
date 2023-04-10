
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Clone, useGLTF } from '@react-three/drei'

export default function Model() {
    const model = useGLTF('./hamburger-draco.glb')

    return <>
        <Clone primitive object={ model.scene } scale={ 0.35 } position-x={ -4 } />
        <Clone primitive object={ model.scene } scale={ 0.35 } position-x={ 0 } />
        <Clone primitive object={ model.scene } scale={ 0.35 } position-x={ 4 } />
    </>
    
}

