import { collection, addDoc,getDocs } from "firebase/firestore";
import {db} from '../Firebase'
import { useState, useEffect } from 'react';
import React from 'react';

const Home2 = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const length = 32;
        const characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
        let password=''
        for (let i=1; i<=length; i++){
            const random= Math.floor(Math.random()*characters.length)
            password+=characters[random];
        }    
    setPassword(password);

  try {
    const docRef = await addDoc(collection(db, "password"), {
      password: password,    
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Enter Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home2;
