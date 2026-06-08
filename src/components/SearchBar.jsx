import React, { useState } from "react";
import {setQuery} from '../redux/features/searchSlice'
import { useDispatch } from "react-redux";

const SearchBar = () => {

    const [text, settext] = useState('')

    const dispatch =useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault()

        dispatch(setQuery(text))


        settext('')
    }
  return (
    <div >
      <form
       onSubmit = {(e)=>{
            submitHandler(e)
        }}
         className='p-10 flex gap-5 bg-gray-900' >
        <input
        required
        value={text}
        onChange={(e)=>{
            settext(e.target.value)
        }}
       
        className=" w-full border-2 px-4 py-2 text-lg rounded outline-none" type="text" placeholder="serach for photos, videos" />
        <button className = 'active:scale-95 border-2 px-4 py-2 text-lg rounded outline-none cursor-pointer '>Search</button>
      </form>
    </div>
  );
};


export default SearchBar;
