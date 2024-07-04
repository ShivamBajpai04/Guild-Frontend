import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuests } from '../api/api';

function QuestList() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    fetchQuests().then(response => setQuests(response.data));
  }, []);

  return (
    <div>
      <h2>Quests</h2>
      <ul>
        {quests.map(quest => (
          <li key={quest._id}>
            <Link to={`/quests/${quest._id}`}>{quest.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestList;
