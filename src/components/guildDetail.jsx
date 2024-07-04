import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGuild } from "../api/api";

function GuildDetail() {
	const { id } = useParams();
	const [guild, setGuild] = useState(null);

	useEffect(() => {
		fetchGuild(id).then((response) => setGuild(response.data.guilds[0]));
	}, [id]);

	console.log(guild);

	return guild ? (
		<div>
			<h2>{guild.guildName}</h2>
			<p>{guild.description}</p>
			<h3>Members</h3>
			<ul>
				{guild.members.map((member) => (
					<li key={member.userId}>{member.rank}</li>
				))}
			</ul>
			<h3>Active Quests</h3>
			<ul>
				{guild.activeQuests.map((quest) => (
					<li key={quest._id}>{quest.title}</li>
				))}
			</ul>
		</div>
	) : (
		<p>Loading...</p>
	);
}

export default GuildDetail;
