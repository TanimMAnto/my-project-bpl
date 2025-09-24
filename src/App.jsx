import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/Currency.png'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayer from './Components/SelectedPlayer/SelectedPlayer'
import { Suspense, use, useState } from 'react'


const fetchPlayers = async () =>{
  const res = await fetch("/player.json")
  return  res.json()
}

function App() {
  const [toggle, setToggle] = useState(true)
  const playerPromise = fetchPlayers()

  return (
    <>
    {/* Navbar star */}
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
{/* navbar end */}


   <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>Available Players</h1>

    <div className='font-bold'>
      <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true? "bg-[#E7FE29]":""}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl  border-l-0 ${toggle===false? "bg-[#E7FE29]":""}`}>Selected <span>(0)</span></button>
    </div> 
   </div>

   {
    toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
   </Suspense>:   <SelectedPlayer></SelectedPlayer>
   }
    </>
  )
}

export default App
