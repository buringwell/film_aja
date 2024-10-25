import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setrating } from '../../store/action/alldataAction';
import { toast, Toaster } from 'sonner';
import axios from 'axios';

const Rating = () => {
    const dispatch = useDispatch();
    const rating = useSelector((state) => state.film.rating);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/account_states`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODUzMzIyNy41NTg1NTksInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8GbhQpqkIJGJp7qhIa2QJzcY69Zzk3ZWmV7Dq6IhKA4'
                          }
                    }
                );
                if (response.data.rated?.value) {
                    dispatch(setrating(response.data.rated.value));
                }
            } catch (error) {
                console.error('Error fetching rating:', error);
                toast.error('Failed to fetch rating.');
            } finally {
                setLoading(false);
            }
        };

        fetchRating();
    }, [id, dispatch]);

    const handleRatingChange = async (value) => {
        try {
            const response = await axios.post(
                `https://api.themoviedb.org/3/movie/${id}/rating`,
                { value },
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODUzMzIyNy41NTg1NTksInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8GbhQpqkIJGJp7qhIa2QJzcY69Zzk3ZWmV7Dq6IhKA4'
                      }
                }
            );
            if (response.status === 201) {
                dispatch(setrating(value));
                toast.success('Rating updated successfully!');
            }
        } catch (error) {
            console.error(error.response?.data?.status_message);
            toast.error('Failed to update rating.');
        }
    };

    const handleRatingDelete = async () => {
        try {
            const response = await axios.delete(
                `https://api.themoviedb.org/3/movie/${id}/rating`,
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODUzMzIyNy41NTg1NTksInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8GbhQpqkIJGJp7qhIa2QJzcY69Zzk3ZWmV7Dq6IhKA4'
                      }
                }
            );
            if (response.status === 200) {
                dispatch(setrating(0));
                toast.success('Rating deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting rating:', error);
            toast.error('Failed to delete rating.');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <Toaster />
            <div className="rating rating-s gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                    <input
                        key={star}
                        type="radio"
                        name="rating"
                        className="mask mask-star-2 bg-yellow-500"
                        value={star}
                        checked={star === rating}
                        onChange={() => handleRatingChange(star)}
                    />
                ))}
            </div>
            {rating > 0 && (
                <button className="btn btn-error btn-sm mt-4" onClick={handleRatingDelete}>
                    Delete Rating
                </button>
            )}
        </div>
    );
};

export default Rating;
