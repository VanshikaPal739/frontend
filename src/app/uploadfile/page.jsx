'use client';
import axios from 'axios';
import React from 'react'

const uploadfile = () => {

    const uploadToCloud = (e) => {
        const file = e.target.files[0];
        if(!file)return;
        const fd = new FormData();
        fd.append('file',file); //append means to add
        fd.append('upload_preset','vpsdft12');
        fd.append('cloud_name','daxpdc19i');
        axios.post('https://api.cloudinary.com/v1_1/daxpdc19i/image/upload',fd,
            {headers: { 'Content-Type': 'multipart/form-data'} }
        )
        .then((response) => {
            console.log(response.data);
            
        }).catch((err) => {
            console.log(err);
        });
    }
  return (
    <div>
        <h1 className="text-3xl text-center font-bold">Upload File</h1>
        <input type="file" accept='image/*' onChange= {uploadToCloud} />
       <img src="http://res.cloudinary.com/daxpdc19i/image/upload/v1722858604/ml3u3e78vg471q2oskxr.png" alt="" />
    </div>
  )
}

export default uploadfile