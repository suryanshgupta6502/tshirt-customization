import { useHelper } from '@react-three/drei'
import React, { useRef } from 'react'
import { DirectionalLightHelper } from 'three'

function Lights() {


    const light = useRef()
    const light1 = useRef()

    // useHelper(light, DirectionalLightHelper, 1, "red")
    // useHelper(light1, DirectionalLightHelper, 1, "red")
    // useHelper(light1, ambien, 1, "red")

    return (
        <>

            <ambientLight ref={light1} intensity={1} castShadow />
            <directionalLight scale={3}
                position={[0, 0, 5]}
                ref={light} intensity={2} />

            <directionalLight scale={3}
                position={[0, 0, -5]}
                ref={light1} intensity={2} />


        </>
    )
}

export default Lights