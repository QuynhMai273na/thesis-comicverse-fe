import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate
import comicService from "../../services/apiServices/comicAPI";

const ComicManagementDashboard = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleComicView = (id) => {
    if (
      sessionStorage.getItem("internal-user") === null ||
      sessionStorage.getItem("internal-user") === undefined ||
      sessionStorage.getItem("internal-user") === "User"
    ) {
      navigate(`/comics/comicinfo?id=${id}`);
    } else   navigate(`/admin/comicinfo?id=${id}`); // Redirect to Signup page
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const comicList = await comicService.getAllComics();
        setComics(comicList);

        console.log(comicList);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Comic.");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading Comics...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Comic Management</h2>
      {/* // create a button to add a new user */}

      {/* <button onClick={handleUserAdded}>Add User</button> */}

      {/* <button onClick={handleUserAdded}>Edit User</button> */}

      <h2>Comic Management</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Language</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {comics.map((comic) => (
            <tr
              key={comic.comicId}
              onClick={() => handleComicView(comic.comicId)}
              style={{ cursor: "pointer" }}
            >
              <td>{comic.comicTitle}</td>
              <td>{comic.description}</td>
              <td>{comic.language}</td>
              <td>Available</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComicManagementDashboard;
