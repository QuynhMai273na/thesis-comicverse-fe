// src/components/ComicList/ComicList.js
import React, { useState, useEffect } from "react";
import ComicListItem from "./ComicItem";
import comicService from "../../../services/apiServices/comicAPI";

const ComicList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetchComics();
  }, []);

  const fetchComics = async () => {
    try {
      const comicsData = await comicService.getAllComics();
      setComics(comicsData);
    } catch (error) {
      console.error("Error fetching comics:", error);
    }
  };

  const handleDelete = async (comicId) => {
    try {
      await comicService.deleteComic(comicId);
      fetchComics(); // Refresh Comic list
    } catch (error) {
      console.error("Error deleting Comic:", error);
    }
  };

  const handleEdit = () => {
    fetchComics(); // Refresh product list after editing
  };

  return (
    <div className="container">
      <h2 className="my-4">Comic List </h2>
      <ul className="list-group">
        {comics.map((comic) => (
          <ComicListItem
            key={comic.comicId}
            comic={comic}
            onDelete={() => handleDelete(comic.comicId)}
            onEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ComicList;
