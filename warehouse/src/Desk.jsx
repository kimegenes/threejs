
export default function Desk(props) {

    return <>
        <group position={ props.position }>

            <mesh>
                <boxGeometry args={[3, 1, 1]}  />
                <meshStandardMaterial color='darkorange' />
            </mesh>  
                       
        </group>
    </>
}