// src/components/ComicForm/ComicForm.js
import React, { useState } from "react";
import comicService from "../../../services/apiServices/comicAPI";

const ComicForm = ({ onComicAdded }) => {
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newComic = { title, price: parseFloat(price) };
    try {
      await comicService.addComic(newComic);
      onComicAdded(); // Trigger refresh
      setName("");
      setPrice("");
    } catch (error) {
      console.error("Error adding Comic:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Add Comic</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ComicName" className="form-label">
            title:
          </label>
          <input
            type="text"
            className="form-control"
            id="ComicName"
            value={title}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ComicPrice" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="ComicPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Comic
        </button>
      </form>
    </div>
  );
};

export default ComicForm;
