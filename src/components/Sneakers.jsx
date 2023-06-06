

import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF,useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'

export function Sneakers(props) {
  const { nodes, materials } = useGLTF('./rtfkt_creator_one.glb')
  const Sneakers = useRef()
  const scroll = useScroll()
  const tl = useRef()

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    tl.current
    .to(Sneakers.current.rotation, {y: -1}, 2)
    .to(Sneakers.current.position, {x: 1}, 2)

    .to(Sneakers.current.rotation, {y: 1}, 6)   
    .to(Sneakers.current.position, {x: -1}, 6)

    .to(Sneakers.current.rotation, {y: 0}, 11)
    .to(Sneakers.current.rotation, {x: 1}, 11)
    .to(Sneakers.current.position, {x: 0}, 11)

    .to(Sneakers.current.rotation, {y: 0}, 13)
    .to(Sneakers.current.rotation, {x: -1}, 13)    
    .to(Sneakers.current.position, {x: 0}, 13)

    .to(Sneakers.current.rotation, {y: 0}, 16)   
    .to(Sneakers.current.rotation, {x: 0}, 16) 
    .to(Sneakers.current.position, {x: 0}, 16)    

    .to(Sneakers.current.rotation, {y: 0}, 20)   
    .to(Sneakers.current.rotation, {x: 0}, 20) 
    .to(Sneakers.current.position, {x: 0}, 20)   

  },[])
  
  return (
    <group {...props} dispose={null} ref={Sneakers}>
      <group position={[-0.21, 0.16, 0.37]} rotation={[300, 0, 100]} scale={0.15}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.bladeblinn31SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.blinn6SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.blinn7SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.blinn1SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.blinn1SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.blinn2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.blinn2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.blinn2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.blinn3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.blinn4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.blinn5SG}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./rtfkt_creator_one.glb')
