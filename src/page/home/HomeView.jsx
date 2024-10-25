import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = ({ nowPLay, popular, upCooming, randomfilm }) => {
  console.log(randomfilm);
  return (
    <div className="homeview overflow-hidden bg-gray-400 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Thumbnail section */}
      <div className="relative">
        <div className="carousel h-[600px] w-full bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="carousel-item w-full relative">
            <img
              src={`https://image.tmdb.org/t/p/original${randomfilm?.backdrop_path}`}
              alt={`Film Image ${randomfilm?.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
              <h1 className="text-4xl font-bold">{randomfilm?.title}</h1>
              <p className="mt-2 text-lg">{randomfilm?.overview}</p>
              <p className="mt-2 text-lg font-semibold">Rating: ✨ {randomfilm?.vote_average}</p>
              <Link
                to={`/detail/${randomfilm?.id}`}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
              >
                Watch Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Now Playing */}
      <div className=" -m-2 bg-gradient-to-b from-black/50">
      <h1 className="font-bold text-4xl mb-4 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500">Now Playing</h1>
      <div className="flex overflow-x-scroll gap-2 bg-transparent bg-base-100 -m-5  bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500">
        {Array.isArray(nowPLay) && nowPLay?.length > 0 ? (
          nowPLay?.map((film) => (
            <div className="card bg-base-100 image-full w-96 bg-transparent dark:text-white" key={film.id}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
                  alt={film?.title || 'Poster'}
                  className="w-full"
                />
              </figure>
              <div className="card-body ">
                <h5 className="card-title font-bold text-xl">{film?.title}</h5>
                <p className="font-bold text-lg">✨ {film?.vote_average}</p>
                <div className="card-actions justify-end">
                  <Link to={`/detail/${film.id}`} className="btn btn-primary">Tonton aja</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No films available at the moment.</p>
        )}
      </div>
      </div>

      <div className="bg-gradient-to-b from-black/50 ">
      {/* Popular */}
      <h1 className="font-bold text-4xl  bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500">POPULAR!!</h1>
      <div className="flex overflow-x-scroll gap-2 -m-3 bg-transparent bg-base-100 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500">
        {Array.isArray(popular) && popular?.length > 0 ? (
          popular?.map((film) => (
            <div className="card bg-base-100 image-full w-96 bg-transparent dark:text-white" key={film.id}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
                  alt={film?.title || 'Poster'}
                  className="w-full"
                />
              </figure>
              <div className="card-body ">
                <h5 className="card-title font-bold text-xl">{film?.title}</h5>
                <p className="font-bold text-lg">✨ {film?.vote_average}</p>
                <div className="card-actions justify-end">
                  <Link to={`/detail/${film.id}`} className="btn btn-primary">Tonton aja</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No films available at the moment.</p>
        )}
      </div>
      </div>

      {/* Upcoming */}.
      <div className=" -m-3  ">
      <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500">Film penuh kejutan🔥🎇 segera</h1>
      <div className="flex overflow-x-scroll gap-2 bg-transparent bg-base-100 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500">
        {Array.isArray(upCooming) && upCooming?.length > 0 ? (
          upCooming?.map((film) => (
            <div className="card bg-base-100 image-full w-96 bg-transparent dark:text-white" key={film.id}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
                  alt={film?.title || 'Poster'}
                  className="w-full"
                />
              </figure>
              <div className="card-body ">
                <h5 className="card-title font-bold text-xl">{film?.title}</h5>
                <p className="font-bold text-lg">✨ {film?.vote_average}</p>
                <div className="card-actions justify-end">
                  <Link to={`/detail/${film.id}`} className="btn btn-primary">Tonton aja</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No films available at the moment.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default HomeView;
