import { MeshReflectorMaterial, Reflector, useTexture } from '@react-three/drei'
import React from 'react'
import * as three from 'three'

function Plane() {

    const [floor, normal] = useTexture(["./SurfaceImperfections003_1K_var1.jpg",
        "./SurfaceImperfections003_1K_Normal.jpg"])

    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} scale={10}>
                <planeGeometry args={[10, 10, 10]} />
                {/* <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
                </Reflector> */}
                <MeshReflectorMaterial rotation={[-Math.PI / 2, 0, Math.PI / 2]} blur={[400, 100]} resolution={512} args={[10, 10]} mirror={1} mixBlur={2} mixStrength={3.5}
                    color="#a0a0a0" roughnessMap={floor} roughness={60}/>
            </mesh>
        </>
    )
}

export default Plane