
export default function Rack(props) {
    //console.log('test', [...position] )
    return <>
        <group position={ props.position }>
            {/* poles */}
            <mesh position={ [2,1,2] }  >
                <boxGeometry args={[.1, 4, .1]}  />
                <meshStandardMaterial color={props.color} />
            </mesh>  
            <mesh position={ [5,1,2] } >
                <boxGeometry args={[.1, 4, .1]}  />
                <meshStandardMaterial color={props.color} />
            </mesh>  
            <mesh position={ [2,1,3] } >
                <boxGeometry args={[.1, 4, .1]}  />
                <meshStandardMaterial color={props.color} />
            </mesh>  
            <mesh position={ [5,1,3] } >
                <boxGeometry args={[.1, 4, .1]}  />
                <meshStandardMaterial color={props.color} />
            </mesh>  
                        
            {/* shelves */}
            <mesh position={ [3.5,1,2.5] }  >
                <boxGeometry args={[3, .1, 1]}  />
                <meshStandardMaterial color='brown' />
            </mesh>  
            <mesh position={ [3.5,3,2.5] }  >
                <boxGeometry args={[3, .1, 1]}  />
                <meshStandardMaterial color='brown' />
            </mesh>                          
        </group>
    </>
}