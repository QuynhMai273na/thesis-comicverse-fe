// EditComicForm.js
import React, { useState, useEffect } from 'react';

const EditComicForm = ({ comic, onSave }) => {
  const [comicData, setComicData] = useState({
    title: '',
    author: '',
    publisher: '',
    releaseDate: '',
    genre: '',
    description: '',
  });

  // Load existing comic data when component mounts
  useEffect(() => {
    if (comic) {
      setComicData(comic);
    }
  }, [comic]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComicData({ ...comicData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(comicData);
    console.log('Updated comic data:', comicData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Edit Comic</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={comicData.title}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Comic Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              value={comicData.author}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Author's Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Publisher</label>
            <input
              type="text"
              name="publisher"
              value={comicData.publisher}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Publisher Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={comicData.releaseDate}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <input
              type="text"
              name="genre"
              value={comicData.genre}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="e.g., Action, Adventure, Fantasy"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={comicData.description}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              rows="4"
              placeholder="Brief description of the comic"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditComicForm;
