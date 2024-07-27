import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='bg-black text-white'>
      <h1 >Welcome to the Guild App</h1>
      <Link to="/guilds">View Guilds</Link>
      <br />
      <Link to="/quests">View Quests</Link>
    </div>
  );
}

export default Home;
