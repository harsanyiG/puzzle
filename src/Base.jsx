import { OrbitControls } from '@react-three/drei'
import { generateBase } from './actions.js'
import Lights from './Lights.jsx'
import { useState } from 'react'

export default function Base() {
  const [positions, setPostions] = useState(generateBase())

  console.log(positions)
  return (
    <>
      <OrbitControls makeDefault />

      <Lights />
      {positions &&
        positions.map((_row,index) =>
          positions[index].map((coord) => (
            <mesh castShadow position-x={coord[0]} position-y={coord[1]} scale={1}>
              <boxGeometry />
              <meshStandardMaterial color='mediumpurple' />
            </mesh>
          ))
        )}

    </>
  )
}
