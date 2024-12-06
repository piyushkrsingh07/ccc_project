import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='h-screen bg-[#302c42] w-screen overflow-x-hidden'>
    <div className='flex  flex-col gap-y-5 w-full '>
      <div className='flex justify-between w-full ml-10 mt-[2rem]'>
        <div className='absolute '>
        <img src="https://ucarecdn.com/905a1ca4-e98f-442a-83b3-83c56ed34e57/" alt="" className='w-[200px] h-[200px]'/>
        </div>
        <div className='flex text-white gap-x-4 text-sm font-normal ml-[35%]'>
          <div > ABOUT</div>
          <div>SERVICES</div>
          <div>TECHNOLOGIES</div>
          <div>HOW TO</div>
        </div>
        <div className='flex gap-x-4 mr-14'>
          <button className='text-white border border-white px-4 py-2 rounded-3xl'>CONTACT US</button>
          <button className='text-black font-semibold border border-white px-4 py-2 rounded-3xl bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]'>JOIN CCC</button>
        </div>
      </div>
      <div className='flex mt-[100px] ml-[30px]'>
        <div className='w-[60%] flex flex-col gap-y-7'>
          <div className='text-[#8176af] text-4xl font-semibold'>Cloud Computing Cell</div>
          <div className='text-[#8176af] text-4xl'>Think|Develop|Develop</div>
          <div className='text-white'>
          Dive into the future with cloud computing,where scalability meets innovation.<br/>Access resources on demand, enhance collaboration,and drive efficiency like never before.<br/> Transform your ideas into reality in the limitless cloud
          </div>
          <div className='flex items-center'>
            <button className='text-black font-semibold border border-white px-4 py-2 rounded-3xl bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]'>BUILD BOOST BEYOND</button>
           <div>
            <img src="https://ucarecdn.com/8c7bf35c-c6db-47a7-9a0b-3ed29382746b/-/preview/96x96/" alt="" className='h-[70%]'/>
           </div>
          </div>

        </div>
        <div className='w-[40%]'>
          <img src="https://ucarecdn.com/11539f1e-9fdd-4952-b2e9-16f04e3ac026/-/preview/498x434/" alt="" className='h-[90%]' />
        </div>
      </div>
    </div>
    <div className='w-full flex justify-between  bg-[#3A3456] h-[12%] rounded-3xl px-auto mx-[20px]  '>
      <div className="flex py-2 ">
        <div>
          <img src="https://ucarecdn.com/1f1a52a0-ba12-46e6-bb09-a07eda237d02/-/preview/70x70/" alt="" className='h-[90%]' />
        </div>
        <div className='flex flex-col text-white'>
          <div className='font -bold'>Visit Us</div>
          <div className='font-light'>3rd Floor CS-IT block AKGEC</div>
        </div>
        </div>
      <div className='flex'>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        </div>
      <div>Send Us A Message</div>
    </div>
   </div>
  )
}

export default App
