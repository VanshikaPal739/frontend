'use client'
import React, { useState } from 'react'

const chats = () => {
  const [message, setMessage] = useState([]);
  console.log(message);

  const AddMessage = (e) => {

    if (e.code === 'Enter') {
      if (!e.target.value) {
        alert('Enter a message');
        return;
      }
      const newTask = { text: e.target.value, completed: false, createdAt: new Date() };
      setMessage([...message, newTask]);
    }
  }
  return (

    <div className=''>
      <h1 className='text-center font-bold text-3xl'> Welcome to Chats</h1>

      <div className=''>
        <div className='max-w-[90%] mx-auto h-56 overflow-y-scroll overflow-y-hidden bg-slate-300' style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQe2TdZPUExRN442EQRKkyA7rudjf9ba2-vQ&s')"}}>
          {
            message.map((val, index) => {
              return <div key={index} className='p-2'>
                <p className={val.completed ? 'line-through' : ''}>{val.text}
                </p>
              </div>
            })
          }
        </div>
        <footer className='bg-black h-36'>
          <div className='mt-9 max-w-[70%] mx-auto'>
            <div className='p-4'>
              <input type="text" className='border-2 rounded border-green-200 w-full p-3 mt-4 bg-black text-white'
                placeholder='type a message'
                onKeyDown={AddMessage} />
              {<button onClick={() => { AddMessage(index) }}
                className='border-2 p-2 rounded-md bg-green-300 float-right'>Send</button>}
            </div>

          </div>
        </footer>

      </div>

    </div>
  )
}

export default chats