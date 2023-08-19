import React from 'react'
import { collection, addDoc,getDocs } from "firebase/firestore";
import {db} from '../Firebase'
import { useState, useEffect } from 'react';
import Passwordgen from './passwordgenerate'

const Home = () => {
    const [password, setPassword] = useState("");
    const [pswds, setPswds] = useState([]);
    const fetchPost = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "pswds"));
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setPswds(newData);
            console.log(newData); // Log newData directly instead of pswds
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    };

    useEffect(()=>{
        fetchPost();
    }, [])
    const addpswd = async (e) => {
        e.preventDefault();
       
        try {
            const docRef = await addDoc(collection(db, "pswds"), {
                pswd: password, // Use the 'password' state variable here
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
  return (

    <div>
        <h1 className='text-4xl'>Input field</h1>
        
        <input type="text" className='outline'  placeholder="What do you have to do today?" onChange={(e)=>setPswds(e.target.value)}/>
        <button type="submit" className="btn" onClick={addpswd}> Submit </button>
        <div>
        {pswds?.map((pswd,i)=>(
            <p key={i}>
                {pswd.pswd}
            </p>
        ))
    }
        </div>
        <div>
          
        </div>

    </div>
  )
}

export default Home