import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Guilds from "./pages/guilds";
import GuildDetail from "./components/guildDetail";
import Quests from "./pages/quests";
import QuestDetail from "./components/questDetails";

function App() {
	return (
		<Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guilds" element={<Guilds />} />
          <Route path="/guilds/:id" element={<GuildDetail />} />
          <Route path="/guild/quests" element={<Quests/>}/>
          <Route path="/guild/quests/:id" element={<QuestDetail />}/>
        </Routes>
      </div>
    </Router>
	);
}



export default App;
