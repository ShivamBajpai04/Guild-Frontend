import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Guild App</h1>
      <Link to="/guilds">View Guilds</Link>
      <br />
      <Link to="/quests">View Quests</Link>
    </div>
  );
}

export default Home;
