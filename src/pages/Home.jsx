import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../firebase';
const Home = () => {
    const addpswd = async (e) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "todos"), {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
  return (

    <div>
        <h1 className='text-4xl'>Input field</h1>
        <form action="">
        <input type="text" className='outline '  placeholder="What do you have to do today?" onChange={(e)=>setTodo(e.target.value)}/>
        </form>

    </div>
  )
}

export default Home