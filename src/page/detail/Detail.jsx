import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DetailView from './DetailView';
import { useDispatch, useSelector } from 'react-redux';
import { setPopular } from '../../store/action/alldataAction';

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [detail,setDetail]= useState({})
    const populars = useSelector((state)=>state.film.popular);


    const ambilDetail = useCallback(async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODUzMzIyNy41NTg1NTksInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8GbhQpqkIJGJp7qhIa2QJzcY69Zzk3ZWmV7Dq6IhKA4'
              }
          });
        setDetail(response.data)
        console.log(response.data)
        } catch (error) {
          console.error("Error fetching the product details:", error);
        }
      }, [id]);

      const popular = useCallback (async () =>{
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular",
            {
                mentod: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODM1ODI5My43Mjk1MDgsInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ftvZlY5B_n9dnuha26yeo8b3wXoqkb4jZ4AOOvRBVo'
                  }
            }
        )
        const data = await response.data
        console.log({data})
        dispatch(setPopular(response.data.results));
    },[dispatch]
  )

      useEffect(() =>{
        popular();
        ambilDetail();
        console.log()
      },[ambilDetail, popular])

  return (
    <DetailView
    detail={detail}
    populars={populars}
    />
  )
}

export default Detail