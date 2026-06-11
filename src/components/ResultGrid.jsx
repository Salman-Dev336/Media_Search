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
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data;
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((items) => ({
              id: items.id,
              type: "photo",
              title: items.alt_description,
              thumbnail: items.urls.small,
              src: items.urls.full,
            }));
          }
          if (activeTab == "videos") {
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
        } catch (err) {
          dispatch(setError(err));
        }
      };
      getData();
    },
    [query, activeTab],
  );

  if (error) return <h1>Error </h1>;
  if (loading) return <h1>loading...</h1>;
  return (
    <div>
      {results.map((items, index) => {
        return <h1>{items.title}</h1>
      })}
    </div>
  );
};

export default ResultGrid;
