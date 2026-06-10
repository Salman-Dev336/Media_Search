import React from 'react'
import {fetchPhotos, fetchVideos} from '../api/mediaApi'
import {setQuery, setLoading, setError, setResults} from '../redux/features/searchSlice'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';

const ResultGrid = () => {

  const {query, activeTab, results, loading, error } = useSelector((store)=>store.search.results);
  useEffect(function(){

    

  },[])

 
  return (

    <div>ResultGrid</div>
  )
}

export default ResultGrid