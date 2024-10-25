import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const genreList = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  // Tambahkan genre lainnya jika diperlukan
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Mengambil query parameter dari URL saat komponen pertama kali dimuat
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query') || '';
    const genres = params.get('with_genres')?.split(',').map(Number) || [];

    setQuery(searchQuery);
    setSelectedGenres(genres);
    if (searchQuery || genres.length > 0) fetchResults(searchQuery, genres);
  }, [location.search]);

  // Handle perubahan genre ketika checkbox di-klik
  const handleGenreChange = (e) => {
    const genreId = parseInt(e.target.value);
    const updatedGenres = e.target.checked
      ? [...selectedGenres, genreId]
      : selectedGenres.filter((id) => id !== genreId);

    setSelectedGenres(updatedGenres);
  };

  // Melakukan pencarian dan memperbarui URL
  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`?query=${query}&with_genres=${selectedGenres.join(',')}`);
    fetchResults(query, selectedGenres);
  };

  // Fungsi untuk melakukan pencarian film berdasarkan query dan genre
  const fetchResults = async (searchQuery, genres) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
          with_genres: genres.join(','),
          query: searchQuery,
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer [YOUR_TOKEN]',
        },
      });
      setResults(response.data.results);
    } catch (err) {
      setError('Terjadi kesalahan saat mencari film.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 text-white dark:from-gray-800 dark:via-gray-600 dark:to-gray-500">
      <h2 className="text-2xl font-bold mb-4">Search Movies</h2>

      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Cari film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-full max-w-xs bg-gray-700 text-white"
        />
        <button type="submit" className="btn btn-primary ml-2" disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>

      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">Filter by Genre:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {genreList.map((genre) => (
            <label key={genre.id} className="flex items-center">
              <input
                type="checkbox"
                value={genre.id}
                checked={selectedGenres.includes(genre.id)}
                onChange={handleGenreChange}
                className="checkbox checkbox-sm bg-gray-700"
              />
              <span className="ml-2">{genre.name}</span>
            </label>
          ))}
        </div>
      </div>

      {error && <p className="text-red-400">{error}</p>}

      <div className="search-results">
        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {results.map((movie) => (
              <div key={movie.id} className="card bg-base-100 image-full w-96 bg-transparent shadow-2xl text-white">
                <figure>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body bg-transparent">
                  <h3 className="card-title font-bold text-xl">{movie.title}</h3>
                  <p className="font-bold text-lg">✨ {movie.vote_average}</p>
                  <p>{movie.release_date}</p>
                  <Link to={`/detail/${movie.id}`} className="btn btn-primary">Tonton aja</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p>Masukkan kata kunci atau pilih genre untuk mencari film.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
