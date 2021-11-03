import { useState, useCallback } from 'react'
import Logo from './Logo'
import './App.css'
import { apiKey, user } from './config'
import UserProfile from './UserProfile'
import Hero from './Hero'
// import TitleList from './TitleListStaticExample'
// import TitleList from './TitleListExample'
import TitleList from './TitleList'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  const handleKeyUp = useCallback((e) => {
    if (e.key === 'Enter' && searchTerm !== '') {
      const nextSearchUrl = `search/multi?query=${searchTerm}&api_key=${apiKey}`;
      setSearchUrl(nextSearchUrl);
    }
  }, [searchTerm]);

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, [])

  return (
    <div id="netflix">
      <header className="Header">
        <Logo />
        <div id="search" className="Search">
          <input
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            type="search"
            placeholder="Search for a title..."
            value={searchTerm}
          />
        </div>
        <UserProfile user={user} />
      </header>
      <Hero />
      <TitleList title="Search Results" url={searchUrl} />
      <TitleList title={`Top TV picks for ${user.name}`} url="discover/tv?sort_by=popularity.desc&page=1" />
      <TitleList title="Trending now" url="discover/movie?sort_by=popularity.desc&page=1" />
      <TitleList title="Most watched in Horror" url="genre/27/movies?sort_by=popularity.desc&page=1" />
      <TitleList title="Sci-Fi greats" url="genre/878/movies?sort_by=popularity.desc&page=1" />
      <TitleList title="Comedy magic" url="genre/35/movies?sort_by=popularity.desc&page=1" />
    </div>
  );
}
