import { useEffect } from 'react'
import { RoundedBox, ScrollControls, Scroll, Environment, Sparkles, Backdrop, Float, Ring } from '@react-three/drei'
import { Sneakers } from './components/Sneakers';
import baffle from 'baffle'


function App() {

  useEffect(() => {
    const target = baffle('.title')
    target.set({
      characters: '░V░e░l░o░c░i░t░░y░X░',
      speed: 100
    })
    target.start()
    target.reveal(1000, 1000)
  })

  return (
    <>
      <color attach="background" args={['#333333']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />

      <ScrollControls pages={6} damping={0.1}>

        <Sneakers scale={0.8} />
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5}
          segments={100}
          scale={[50, 30, 10]}
          position={[4, -10, 0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>

        <Float
          speed={4}
          rotationIntensity={0.5}
          floatIntensity={1}
          floatingRange={[1, 1]}
        >
          <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
            <meshStandardMaterial color="#2a3a3f" />
          </Ring>
        </Float>

        <Scroll>

        </Scroll>
        <Scroll html style={{ width: '100%' }}>
          <h1 className='title' style={{ color: '#cdcbca', position: 'absolute', top: `65vh`, left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>VelocityX</h1>

          <div className='row' style={{ position: 'absolute', top: `132vh` }}>
            <h2>BE A RUNNER OF THE FUTURE.</h2>
            <p style={{ maxWidth: '400px' }}>Introducing VelocityX Sneakers, a revolutionary footwear line that combines futuristic design with cutting-edge technology. These sneakers are not just an accessory - they are a statement of speed, agility, and innovation.</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh` }}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
              <h2 style={{ maxWidth: "440px" }}>UNLEASH YOUR FUTURISTIC STRIDE.</h2>
              <p style={{ maxWidth: '440px' }}>Step into the future of running, where style meets substance. VelocityX Sneakers are not only designed to make heads turn but also to enhance your every move. The breathable and moisture-wicking fabric keeps your feet cool and dry, while the adaptive fit conforms to your foot shape, providing a second-skin feel that enhances your natural agility.</p>
              <button>Read more</button>
            </div>
          </div>

          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>VelocityX Sneakers – where innovation runs at the speed of your dreams. Are you ready to make your mark on the future?</h2>

          <button style={{ position: 'absolute', top: `590vh`, left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
