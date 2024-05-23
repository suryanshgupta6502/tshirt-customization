import { Center, Decal, Float, Image, Text, useAnimations, useFBX, useGLTF, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as three from 'three'
import { button, useControls } from 'leva'
import axios from 'axios'


const material = new three.MeshPhysicalMaterial({ roughness: 1, iridescence: .4, iridescenceIOR: 1.33, color: { r: 1, g: 0, b: 0 } })



function Tshirt() {
    // const [animationplay, setanimtionplay] = useState(true)
    const model = useRef()


    const { nodes, materials, animations } = useGLTF('./tshirt.glb')
    const { actions, names } = useAnimations(animations, model)
    // const animationss = useAnimations(animations, model)
    // console.log(animationss);


    function animation(walk) {
        // setanimtionplay(!animationplay)

        // console.log(walk);
        walk ? actions[names[0]]?.reset().play() : actions[names[0]]?.fadeOut(.5)
        // animationplay ? actions[names[0]]?.reset().play() : actions[names[0]].fadeOut(.5)
    }


    // const logotexture = useTexture("./SurfaceImperfections003_1K_var1.jpg")


    const controls = useControls({
        Tshirt_Color: {
            value: "#9941ba"
            // value: { r: 1, g: 0, b: 0 }
        },
        Net_Tshirt: false,
        Walk: {
            value: false,
            onChange: (val) => animation(val)
        }
    })

    // setuserinputs({
    //     Tshirt_Color: controls.Tshirt_Color,
    //     Net_Tshirt: controls.Net_Tshirt,
    //     Walk: controls.Walk
    // })


    const c = new three.Color(new three.MeshNormalMaterial())
    // console.log(controls.Tshirt_Color + '#000000');
    // console.log(controls.Tshirt_Color);
    // console.log(c);


    //mixing colors
    const color1 = new three.Color(controls.Tshirt_Color)
    const random = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    const color2 = new three.Color(random)
    const color = new three.Color().addColors(color1, color2)





    return (
        <>

            {/* <mesh onClick={animation}>
                <boxGeometry />
                <meshBasicMaterial color={"red"} />
            </mesh> */}


            {/* <Center position={[7, 2, 0]}>
                <Float speed={1} floatingRange={[-1,1]} rotationIntensity={.5} >
                    <Text color={colors.Tshirt_Color} maxWidth={2} textAlign='center'>
                        Customize Your Tshirt 
                    </Text>
                </Float>
            </Center> */}


            <Text scale={10} position={[0, 1, -10]} color={color}
                strokeWidth={.01} strokeColor={"#ffffff"} castShadow>
                T-shirt
                {/* <meshNormalMaterial blending={three.AdditiveBlending}/>  */}
                {/* <meshBasicMaterial /> */}
            </Text>

            <group ref={model} name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={.04} position={[0, -11, 0]}  >
                <skinnedMesh
                    name="Object_4001"
                    geometry={nodes.Object_4001.geometry}
                    material={material}
                    material-color={controls.Tshirt_Color}
                    // material-color={colors.TshirtColor}
                    material-wireframe={controls.Net_Tshirt}
                    // material-metalness={colors.metalness}
                    // material-roughness={colors.roughness}
                    skeleton={nodes.Object_4001.skeleton}
                >
                    {/* <Decal map={logotexture} debug scale={60} position={[0, 0, -250]} rotation={[-Math.PI/2,0,0]}>
                        <meshBasicMaterial map={logotexture} polygonOffset polygonOffsetFactor={-1}/>
                    </Decal> */}
                </skinnedMesh>
                <primitive object={nodes.mixamorigHips} />
            </group>



            {/* <mesh
                name="Object_4001"
                geometry={nodes.Object_4001.geometry}
                material={material} >
                <Decal map={logotexture} debug scale={12} position={[0, 0, -5]} rotation={[0, 0, 0]}>
                    <meshBasicMaterial map={logotexture} polygonOffset polygonOffsetFactor={-1} />
                </Decal>
            </mesh> */}


        </>
    )





}

useGLTF.preload('./tshirt.glb')


export default Tshirt