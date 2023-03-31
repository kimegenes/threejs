export default function Eperience() 
{

    return <>
        <mesh rotation-y={ Math.PI * 0.27 } position={[2,0,0]} scale={ [3,2,1]}>
            <boxGeometry/>
            <meshBasicMaterial color="purple" wireframe />
        </mesh>
    </>
}