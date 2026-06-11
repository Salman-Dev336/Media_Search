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
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if(!query) return 
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data;
          if (activeTab === "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((items) => ({
              id: items.id,
              type: "photo",
              title: items.alt_description,
              thumbnail: items.urls.small,
              src: items.urls.full,
            }));
          }
          if (activeTab === "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((items) => ({
              id: items.id,
              type: "video",
              title: items.user.name,
              thumbnail: items.image,
              src: items.video_files[0].link,
            }));
          }
          // console.log(data);
          dispatch(setResults(data));
          dispatch(setLoading(false));
        } catch (err) {
          dispatch(setError(err.message));
              dispatch(setLoading(false));
        }
      };
      getData();
    },
    [query, activeTab],
  );

  if (error) return <h1>Error </h1>;
  if (loading) return <h1>loading...</h1>;
  return (
    <div className="flex flex-wrap gap-5 ">
      {results.map((items, index) => {
        return <div key={index}> 
          < ResultCard items={items} />
        </div>
      })}
    </div>
  );
};

export default ResultGrid;
