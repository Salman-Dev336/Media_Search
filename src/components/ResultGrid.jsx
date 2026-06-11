import React from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  let data;
  const getData = async () => {
    if (activeTab == "photos") {
      data = await fetchPhotos(query);
    }
    if (activeTab == "videos") {
      data = await fetchVideos(query);
    }
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default ResultGrid;
