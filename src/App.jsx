import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import Tshirt from './Tshirt'
import * as three from 'three'
import Lights from './Lights'
import Plane from './Plane'




function App() {



    return (
        <>
            <Canvas

                camera={{
                    position: [-1, 0, 10],
                }}
                gl={{
                    pixelRatio: window.devicePixelRatio,
                    toneMapping: three.ACESFilmicToneMapping,
                    // outputColorSpace: three.LinearSRGBColorSpace,
                }}
            >
                <color args={["black"]} attach="background" />

                <OrbitControls />
                <Suspense fallback={null}>
                    <Tshirt />
                </Suspense>
                <Plane />
                <Lights />
            </Canvas >
        </>
    )
}

export default App