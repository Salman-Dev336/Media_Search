import React from 'react'
import {fetchPhotos} from './api/mediaApi'
import {fetchVideos} from './api/mediaApi'

const App = () => {


  // function getPhotos(){
  //   fetchPhotos()
  // }
  return (
    <div className='h-screen w-full bg-gray-950 text-white'> 
    <button className='bg-green-400 px-5 py-1 m-2' onClick = {async()=>{
      const data = await fetchPhotos('nature')
      console.log(data.results);
    }}>
      get photos
    </button>
    <button className='bg-blue-400 px-5 py-1 m-2' onClick = {async()=>{
      const data = await fetchVideos('nature')
      console.log(data.videos);
    }}>
      get videos
    </button>
    </div>
  )
}

export default App