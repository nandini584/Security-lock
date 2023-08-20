import { collection, addDoc,getDocs } from "firebase/firestore";
import {db} from '../Firebase'
import { useState, useEffect } from 'react';
import React from 'react';
import {Link} from 'react-router-dom'
const Home2 = () => {
  const [password, setPassword] = useState('');
  const [website, setWebsite] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const length = 32;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let newPassword = ''; 
    let newWebsite = website;
    for (let i = 1; i <= length; i++) {
      const random = Math.floor(Math.random() * characters.length);
      newPassword += characters[random];
    }
    setPassword(newPassword);
    setWebsite(newWebsite);
  
    try {
      const docRef = await addDoc(collection(db, "password"), {
        password: newPassword, 
        website: newWebsite
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  }
  return (
    <div className="flex flex-col items-center justify-center mt-32">
    <div className='flex flex-col items-center justify-center bg-purple-100 p-20 w-2/5 rounded-lg'>
      
      <div className='flex flex-row items-center justify-center mb-6'>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Which website is this password for?</b> 
          <input type="text" placeholder="Website" value={website} onChange={handleWebsiteChange} className='text-purple-950 border-2 mb-5 mt-2 bg-white border-purple-800 rounded-lg text-base font-medium opacity-80 w-[500px] pl-2 py-2'/>
        </label>
        <label>
           <b>What is your password?</b> 
          <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} className='text-purple-950 border-2 mt-2 bg-white border-purple-800 rounded-lg text-base font-medium opacity-80 w-[500px] pl-2 py-2'/>
        </label>
        <button type="submit" className='bg-purple-800 mt-5 text-white font-regular text-as py-2 px-8 border-2 hover:border-2 hover:border-purple-700 font-bold border-purple-400 rounded-full hover:bg-white hover:text-purple-800'>Submit</button>
      </form></div>
    </div>
    <Link to={{pathname:'/pswds', state:{website:website, password: password}}}>
    <button className='bg-purple-800 mt-5 text-white font-regular text-as py-2 px-8 border-2 hover:border-2 hover:border-purple-700 font-bold border-purple-400 rounded-full hover:bg-white hover:text-purple-800'>Show Passwords</button></Link>
    </div>
  );
};

export default Home2;
