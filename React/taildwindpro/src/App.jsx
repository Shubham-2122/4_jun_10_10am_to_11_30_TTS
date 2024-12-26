import React from 'react'
import './App.css'
function App() {

  return (
    <>
      <h1 className='text-black italic bg-pink-400 text-5xl mx-10 my-10 px-10 py-20'>hello vite app</h1>
      <h2 className='text-center text-green-600 mt-5 ml-6 mr-7 mb-10 p-[100px]  bg-slate-400 text-6xl font-mono '>hello this text propet</h2>
      <h2 className='line-through uppercase m-36 text-5xl decoration-red-800'>asdkjhasikd asds as</h2>

      {/* [] */}
      <div className='w-1/4 h-72  hover:bg-red-500 hover:text-[rgb(178,233,89)]  bg-[rgba(0,0,0,0.5)] text-[50px] text-[rgb(255,255,255)]'> Hello this</div>

      <div className="main flex justify-between">
        <div className="main1 w-60 h-60 bg-red-500 border border-black">1</div>
        <div className="main1 w-60 h-60 bg-red-500 border border-black">2</div>
        <div className="main1 w-60 h-60 bg-red-500 border border-black">3</div>
      </div>

      <div className="main2 container bg-blue-500 mx-auto w-5/6">sdafas</div>
      
   
    </>
  )
}

export default App
