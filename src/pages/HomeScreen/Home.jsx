import logo from "../../assets/logo.svg";
// import "../HomeScreen/Home.css";
import ComicList from "../../components/comic/ComicList/ComicList";
import ComicForm from "../../components/comic/ComicForm/ComicForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate

function Home() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleComicAdded = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-render
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to Login page
  };

  const handleSignupRedirect = () => {
    navigate("/signup"); // Redirect to Signup page
  };
  console.log(process.env.REACT_APP_API_URL);



  
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      {/* Two buttons to redirect to Login and Signup */}
      <button onClick={handleLoginRedirect} className="btn btn-primary">
        Login
      </button>
      <button onClick={handleSignupRedirect} className="btn btn-secondary">
        Signup
      </button>
      <div>
        <ComicList key={refresh} />
        <ComicForm onComicAdded={handleComicAdded} />
      </div>
    </div>
  );
}

export default Home;
