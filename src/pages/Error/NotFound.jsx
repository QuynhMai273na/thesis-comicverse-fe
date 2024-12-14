import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <img
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <Link to="/home" className="link-home">
      Go Home
    </Link>
  </div>
);

export default NotFound;
