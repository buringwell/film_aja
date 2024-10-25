import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'sonner';
import { Link } from 'react-router-dom';
import { setrating } from '../../store/action/alldataAction';
import Rating from '../../components/rating/rating';

const Ratingview = () => {
  const dispatch = useDispatch();
  const ratingList = useSelector((state) => state.film.rating || []);
  const [loading, setLoading] = useState(true);

  const fetchRatedMovies = async () => {
    const ratedMoviesConfig = {
      method: "GET",
      url: "https://api.themoviedb.org/3/account/21559355/rated/movies",
      params: { language: "en-US", page: "1", sort_by: "created_at.asc" },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODUzMzIyNy41NTg1NTksInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8GbhQpqkIJGJp7qhIa2QJzcY69Zzk3ZWmV7Dq6IhKA4'
      }
    };

    try {
      const response = await axios.request(ratedMoviesConfig);
      dispatch(setrating(response.data.results));
    } catch (error) {
      console.error("Error fetching rated movies:", error);
      toast.error("Failed to fetch rated movies."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRatedMovies();
  }, [dispatch]);


  if (loading) {
    return <p>Loading your rated movies...</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <Toaster />
      <h1 className="text-2xl font-bold text-center mb-5">Your Rated Movies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          ratingList?.map((movie) => (
            <div key={movie.id} className="card shadow-lg">
              <Link to={`/detail/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{movie.title}</h2>
                  <p className="text-sm text-gray-600">
                    Your rating: {movie.rating}/10
                  </p>
                </div>
              </Link>
              
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Ratingview;
