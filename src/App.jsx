import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/Currency.png'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import { Suspense } from 'react'


const fetchPlayers = async () =>{
  const res = await fetch("/player.json")
  return  res.json()
}

function App() {
  const playerPromise = fetchPlayers()

  return (
    <>
    <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <img className='w-[60px] h-[60px]' src={navImg} alt="" />
  </div>
  <div className="flex items-center">
    <span className='mr-1'>6000000000</span>
    <span className='mr-1'>Coin</span>
    <img src={dollarImg} alt="" />
  </div>
</div>


   <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
   </Suspense>
   {/* <SelectedPlayer></SelectedPlayer> */}
    </>
  )
}

export default App
