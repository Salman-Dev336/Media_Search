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

  useEffect(
    function () {
      const getData = async () => {
        let data;
        if (activeTab == "photos") {
          data = await fetchPhotos(query);
        }
        if (activeTab == "videos") {
          data = await fetchVideos(query);
        }
        console.log(data);
      };
      getData();
    },
    [query, activeTab],
  );
  return <div></div>;
};

export default ResultGrid;
