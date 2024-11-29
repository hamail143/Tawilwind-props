

import Card from './components/card'

import './App.css'

function App() {
  

  return (
    <>
      <h1 className='bg-pink-500 text-black p-4 rounded-xl mb-5'>Tailwind CSS</h1>
      <Card username={"Hamail"} btnText={"Contact me"} intro={"Hey a a junior React Developer"}/>
      <Card username={"Raza"} btnText={"Contact Senior"} intro={"Hey a a Senior React Developer"} />
      



    </>
  )
}

export default App
