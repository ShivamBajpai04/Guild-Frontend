import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuest } from '../api/api';

function QuestDetail() {
  const { id } = useParams();
  const [quest, setQuest] = useState(null);

  useEffect(() => {
    fetchQuest(id).then(response => setQuest(response.data));
  }, [id]);

  return (
    quest ? (
      <div>
        <h2>{quest.title}</h2>
        <p>{quest.description}</p>
        <p>Reward: {quest.reward}</p>
        <p>Rank: {quest.rank}</p>
        <p>Status: {quest.completed ? 'Completed' : 'Incomplete'}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
}

export default QuestDetail;
