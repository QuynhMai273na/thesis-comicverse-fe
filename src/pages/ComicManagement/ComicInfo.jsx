import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import comicService from "../../services/apiServices/comicAPI";
import { useLocation } from 'react-router-dom';
const ComicDetails = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const nav = useNavigate(); // Initialize the navigation hook
  const location = useLocation();
  const [comicId, setComicId] = useState(null);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams(location.search);
        const id = params.get('id');
        setComicId(id);
        console.log(id);
        const getAComic = await comicService.getComicById(id);
        setComics(getAComic);

        console.log(getAComic);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tasks.");
        setLoading(false);
      }
    };

    fetchComics();
  }, [location]);

  const comic = {
    title: `${comics.comicTitle}`,
    author: [`${comics.authorID}`],
    isbn: "............",
    subject: "Bulletin For International Taxation",
    classification: "BIT 2021 vol75no.9",
    edition: "2nd Edition",
    callNumber: "BIT 2021 vol.75no.9",
    language: `${comics.language}`,
    publisher: `${comics.publisherID}`,
    publishingYear: "2021",
    publishingPlace: "Amsterdam",
    collation: "401-460; ill.; 29cm",
    localURL: `${comics.localhostURL}`,
    remoteURL: `${comics.remoteURL}`,
    avatarURL: `${comics.avatarURL}`,
  };

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/editcomic");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 flex gap-6">
        {/* comic Cover */}
        <div className="w-1/4">
          <img
            src={comic.avatarURL}
            alt="comic Cover"
            className="rounded-md"
          />
        </div>

        {/* comic Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">{comic.title}</h2>
          <p className="text-green-600 mb-2">Available</p>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Author(s): </span>
              {comic.author.join(", ")}
            </p>
            <p>
              <span className="font-medium">ISBN: </span>
              {comic.isbn}
            </p>
            <p>
              <span className="font-medium">Subject: </span>
              {comic.subject}
            </p>
            <p>
              <span className="font-medium">Classification: </span>
              {comic.classification}
            </p>
            <p>
              <span className="font-medium">Edition: </span>
              {comic.edition}
            </p>
            <p>
              <span className="font-medium">Call Number: </span>
              {comic.callNumber}
            </p>
            <p>
              <span className="font-medium">Language: </span>
              {comic.language}
            </p>
            <p>
              <span className="font-medium">Publisher: </span>
              {comic.publisher}
            </p>
            <p>
              <span className="font-medium">Publishing Year: </span>
              {comic.publishingYear}
            </p>
            <p>
              <span className="font-medium">Publishing Place: </span>
              {comic.publishingPlace}
            </p>
            <p>
              <span className="font-medium">Collation: </span>
              {comic.collation}
            </p>
          </div>
          <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Translate this comic
          </button>
        </div>

        {/* Sidebar */}
        <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">How To...</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Edit comic</span>
              <button
                className="text-blue-600 hover:underline"
                onClick={handleEditClick}
              >
                Learn more
              </button>
            </li>
            <li className="flex justify-between items-center">
              <span>Delete comic</span>
              <button className="text-blue-600 hover:underline">
                Learn more
              </button>
            </li>
          </ul>
          <button className="mt-6 w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Ask the Publisher
          </button>
        </div>
      </div>

      {/* Related Comic Section */}
      <div className="max-w-5xl mx-auto mt-8">
        <h3 className="text-lg font-semibold mb-4">Relevant Comics:</h3>
        <div className="grid grid-cols-4 gap-4">
          {/* Placeholder images for related comics */}
          <img
            src="https://via.placeholder.com/100"
            alt="Related comic 1"
            className="rounded-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Related comic 2"
            className="rounded-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Related comic 3"
            className="rounded-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Related comic 4"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ComicDetails;
