import React from 'react'
import {fetchPhotos} from './api/mediaApi'

const App = () => {


  // function getPhotos(){
  //   fetchPhotos()
  // }
  return (
    <div className='h-screen w-full bg-gray-950 text-white'> 
    <button onClick = {async()=>{
      const data = await fetchPhotos('nature')
      console.log(data.results);
    }}>
      get photos
    </button>
    
    </div>
  )
}

export default App