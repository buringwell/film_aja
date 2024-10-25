import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../../components/rating/rating';

const DetailView = ({ detail,populars }) => {
   
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500-mt-10">
      {/* Overlay untuk membuat teks lebih terbaca */}
      <div className="bg-black bg-opacity-50 w-full min-h-screen flex items-center justify-center" >
        <div className="card w-full  bg-base-100 shadow-xl"  
        style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${detail?.backdrop_path})`, // Ganti URL dengan gambar film yang Anda inginkan
      }}>
          <div className="flex flex-row">
            {/* Bagian Gambar */}
            <figure className="w-1/2">
              <img
                src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`} // Ganti dengan URL gambar lain atau gambar Anda
                alt={detail?.title}
                className="object-cover w-1/2"
              />
            </figure>

            {/* Bagian Konten */}
            <div className="card-body w-1/2 p-8">
              <h2 className="card-title text-3xl font-bold text-white">
                {detail?.title}
              </h2>

              {/* Deskripsi */}
              <div className="mt-6">
                <p className="text-white">
                  {detail?.overview}
                </p>
              </div>

              {/* Genre */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {detail?.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="badge badge-outline bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 text-white px-4 py-2 rounded-full"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

              {/* Bagian Info Film */}
              <div className="mt-2 grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <button className="btn btn-success rounded-full w-16 h-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-5.197 3.034A1 1 0 018 13.383V10.62a1 1 0 01.555-.894l5.197-2.771a1 1 0 011.5.868v5.538a1 1 0 01-1.5.877z"
                      />
                    </svg>
                  </button>
                  <p className="mt-2 text-white">Play</p>
                </div>
                
                <div className="stat bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 rounded-lg p-4 text-center">
                  <p className="stat-title text-lg  text-white">Rating</p>
                  <p className="stat-value text-xl font-semibold text-white">{detail?.vote_average}</p>
                </div>
                <div className="stat bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 rounded-lg p-4 text-center">
                  <p className="stat-title text-lg  text-white">Release</p>
                  <p className="stat-value text-xl font-semibold text-white">{detail?.release_date}</p>
                </div>
                <div className="stat bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 rounded-lg p-4 text-center">
                  <p className="stat-title text-lg  text-white">Budget</p>
                  <p className="stat-value text-xl font-semibold  text-white">${detail?.budget}</p>
                </div>
                <div className="stat bg-gradient-to-r from-blue-950 via-blue-900 to-blue-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 rounded-lg p-4 text-center">
                  <p className="stat-title text-lg  text-white">Length</p>
                  <p className="stat-value text-xl font-semibold  text-white">{detail?.runtime} min</p>
                </div>
              </div>
            
              {/* Hype */}
              <div className="mt-4 flex justify-around">
                <Rating/>
                <div className="badge bg-yellow-500 text-white text-lg">IMDB {detail?.vote_average }/10</div>
                <div className="badge bg-green-500 text-white text-lg">Metacritic {detail?.vote_average }</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popular */}
      .
      <h1 className="font-bold text-4xl  mt-10 text-white">POPULAR!!</h1>
      <div className="flex w-full overflow-x-scroll gap-5">
        {Array.isArray(populars) && populars?.length > 0 ? (
          populars?.map((film) => (
            <div className="card bg-base-100 image-full w-96 shadow-xl bg-transparent" key={film.id}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
                  alt={film?.title || 'Poster'}
                  className="w-full bg-gray-500"
                />
              </figure>
              <div className="card-body ">
                <h5 className="card-title font-bold text-xl">{film?.title}</h5>
                <p className="font-bold text-lg">✨ {film?.vote_average}</p>
                <div className="card-actions justify-end">
                  <Link to={`/detail/${film.id}`} className="btn btn-primary">Tonton aja</Link> {/* Fixed link for dynamic route */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No films available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default DetailView;
