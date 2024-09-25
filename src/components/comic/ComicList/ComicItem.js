// src/components/ComicList/ComicListItem.js
import React, { useState } from "react";
import comicService from "../../../services/apiServices/comicAPI";

const ComicListItem = ({ comic, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(comic.title);
  const [editedPrice, setEditedPrice] = useState(comic.price);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const editedComic = {
      ...comic,
      title: editedTitle,
      price: parseFloat(editedPrice),
    };
    try {
      await comicService.updateComic(comic.comicId, editedComic);
      setIsEditing(false);
      onEdit(); // Refresh Comic list
    } catch (error) {
      console.error("Error updating Comic:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(comic.title);
    setEditedPrice(comic.price);
  };

  return (
    <li className="list-group-item">
      {isEditing ? (
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
              required
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <span>
            {comic.title} - ${comic.price}
          </span>
          <div>
            <button className="btn btn-danger me-2" onClick={onDelete}>
              Delete
            </button>
            <button className="btn btn-primary" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ComicListItem;
