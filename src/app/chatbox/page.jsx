'use client'
import React, { useState } from 'react'

const chatbox = () => {
  const [message, setMessage] = useState([]);
  console.log(message);

  const AddMessage = (e) => {


  if(e.code==='Enter'){
    if(!e.target.value){
      alert('You have to enter a message');
      return;
    }
const newTask={text: e.target.value, completed:false, createdAt: new Date()};
setMessage([...message.newTask]);
  }
}
  return (
    <div className=' '>
        <h1 className = 'font-bold text-4xl text-center'>Welcome to Chats</h1>

        <div className=' '>
            <div className='max-w-[90%] mx-auto h-56'>

              {
          message.map((val,index)=> {
            return <div key={index} className='p-2'>
               <p className={val.completed? 'line-through': ''}>{val.text}</p> 
               </div>
          })
        }
        </div>
          
          <footer className='bg-black h-35'>
            <div className='mt-9 max-w-[70%] mx-auto'>
              <div className='p-4'>
              <input type="text" className='border-2 rounded border-green-200 w-full p-3 mt-4 bg-black text-white' placeholder='type a message' 
              onKeyDown={AddMessage} />
            </div>
            </div>

          </footer>
          </div>
          </div>
  )
}

export default chatbox