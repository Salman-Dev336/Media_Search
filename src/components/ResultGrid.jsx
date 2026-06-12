import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading(true));

        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);

          data = response.results.map((items) => ({
            id: items.id,
            type: "photo",
            title: items.alt_description || "Untitled Photo",
            thumbnail: items.urls.small,
            src: items.urls.full,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchVideos(query);

          data = response.videos.map((items) => ({
            id: items.id,
            type: "video",
            title: items.user.name,
            thumbnail: items.image,
            src: items.video_files[0].link,
          }));
        }

        dispatch(setResults(data));
        dispatch(setLoading(false));

      } catch (err) {
        dispatch(setError(err.message));
        dispatch(setLoading(false));
      }
    };

    getData();

  }, [query, activeTab]);

  if (error)
    return (
      <h1 className="text-center text-red-500 mt-10 text-xl">
        Error: {error}
      </h1>
    );

  if (loading)
    return (
      <h1 className="text-center text-gray-500 mt-10 text-xl">
        Loading...
      </h1>
    );

  return (
    <div className="min-h-screen bg-black px-6 py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        {results.map((items) => (
          <a href="">
            <ResultCard key={items.id} items={items} />
          </a>
        ))}

      </div>

    </div>
  );
};

export default ResultGrid;