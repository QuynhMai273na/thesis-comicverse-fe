import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import comicService from "../../services/apiServices/comicAPI";
import { IoMdSearch } from "react-icons/io";

const ComicManagementDashboard = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleComicView = (id) => {
    const isUserInternal = sessionStorage.getItem("internal-user") !== "User" &&
                           sessionStorage.getItem("internal-user") !== null;
    navigate(isUserInternal ? `/admin/comicinfo?id=${id}` : `/comics/comicinfo?id=${id}`);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const comicList = await comicService.getAllComics();
        setComics(comicList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Comic.");
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading Comics...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 h-screen"> 
      <div className="relative group hidden sm:block mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] sm:w-[200px]
                     group-hover:w-[300px] transition-all
                     duration-300 rounded-full border
                     border-gray-300 px-2 py-1
                     focus:outline-none focus:border-primary"
        />
        <IoMdSearch 
          className="text-gray-500 
                     group-hover:text-primary 
                     absolute top-1/2 -translate-y-1/2 right-3"
        />
      </div>
      <div className="ml-20 grid grid-cols-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {comics.map((comic) => (
          <div
            key={comic.comicId}
            className="bg-cyan-200 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transform transition-all duration-200"
            onClick={() => handleComicView(comic.comicId)}
            style={{ width: '200px' }} // Fixed narrower width
          >
            <img
              src={comic.imageUrl}
              alt={comic.comicTitle}
              className="w-full h-40 object-cover" // Height kept the same
            />
            <div className="p-2">
              <h3 className="text-sm font-bold text-black truncate">{comic.comicTitle}</h3>
              <p className="text-xs text-orange-400 font-semibold mt-1">{comic.price} coins</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicManagementDashboard;
