import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchGuilds } from '../api/api';

function GuildList() {
  const [guilds, setGuilds] = useState([]);

  useEffect(() => {
    fetchGuilds().then(response => setGuilds(response.data.guilds));
  }, []);

  console.log(guilds);
  return (
    <div>
      <h2>Guilds</h2>
      <ul>
        {guilds.map(guild => (
          <li key={guild._id}>
            <Link to={`/guilds/${guild._id}`}>{guild.guildName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuildList;
