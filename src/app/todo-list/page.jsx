'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Todolist = () => {
    //   const [num,setNum ] = useState(10)
    const [tasklist, setTasklist] = useState([]);
    console.log(tasklist);
  

    const addTask = (e) => {

        // console.log(e.code);
        if (e.code === 'Enter') {
            if(!e.target.value){
                alert('Enter a value to add');
                return;
            }
            console.log(e.target.value);
            const newTask={text: e.target.value, completed:false, createdAt: new Date()};

            setTasklist([...tasklist, newTask]);

            e.target.value='';
            toast.success('New Task Added Successfully');
        }
    };

    const deleteTask=(index)=>{
        console.log(index);
        const temp=tasklist;
        temp.splice(index,1);
        setTasklist([ ...temp]);
        toast.success('Task Deleted Successfully');
    }

    const toggleComplete=(index)=> {
        const temp=taskList;
        temp[index].completed=!temp[index].completed;
        setTasklist([...temp]);
    }
    return (
        <div className='max-w-[80%] mx-auto'>
            {/* {num} */}
            {/* <button onClick={() => { setNum(num + 1); console.log(num);}}>add number</button> */}
            <h1 className='text-5xl font-bold text-center'>Todolist</h1>
            <div className='border-2 rounded-md-5 shadow mt-5'>

                <div className='border-b-2 border-grey-700 p-4'>

                    <input placeholder='Add a new text'
                        type="text"
                        className='border-2 border-blue-500 rounded p-3 w-full'
                        onKeyDown={addTask}
                    />
                </div>
                <div className='p-5'>
                    {
                        tasklist.map((task,index) => { 
                            return <div key={index} className='Shadow-md border-2 rounded-lg p-4 mb-5'>
                                {task.completed? (
                                    <p className='text-sm bg-green-500 px-3 w-fit rounded-full text-white'>Completed</p>
                                ) : (  <p className='text-sm bg-green-500 px-3 w-fit rounded-full text-white'>Pending</p>)}
                        <p className={task.completed? 'line-through': ''}>{task.text}</p>
                        <div className='mt-3 flex gap-3 justify-end'>
                        <button
                        onClick = { ()=>{toggleComplete(index)} }
                        className='bg-blue-500 px-2 text-white rounded-full'>Edit</button>
                        <button 
                          onClick={()=>{deleteTask(index)}}
                        className='bg-red-500 px-2 text-white rounded-full'>Delete</button>
                              </div>
                  </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Todolist