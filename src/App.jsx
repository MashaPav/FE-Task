import './App.css';

import React from 'react';
import { useAuth, AdminPortal } from '@frontegg/react'
import profile from './lucky-cat.jpeg';
import ReactRoundedImage from "react-rounded-image";

const handleClick = () => {
  AdminPortal.show();
};

function App() {
  const { user, isAuthenticated } = useAuth();


  return (
  <div>
      {isAuthenticated && (
        <div className="Main App">
          <ReactRoundedImage image={profile} roundedSize="0" imageWidth="110" imageHeight="110" margin="3"alt={user.name} />
          <span style={{padding: '3px'}}>{user.name}</span>
          <button className="Button" onClick={handleClick}>Settings</button>
          </div>
      )}
  </div>
  );
}

export default App;
