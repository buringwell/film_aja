import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNowplay, setPopular, setTopRate, setUpcoming } from '../../store/action/alldataAction'
import HomeView from './HomeView'


const Home = () => {
    const dispatch = useDispatch();
    const [randomfilm,setRandomMovie]= useState({})
    const playnowfim = useSelector((state)=>state.film.nowplay);
    const populars = useSelector((state)=>state.film.popular);
    const topRate = useSelector((state)=>state.film.toprate);
    const upCooming = useSelector((state)=>state.film.upcooming);

    const playnow = useCallback (
      async () =>{
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing",
            {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODM1ODI5My43Mjk1MDgsInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ftvZlY5B_n9dnuha26yeo8b3wXoqkb4jZ4AOOvRBVo'
                  }
            }
        )
        const data = await response.data
        console.log("play")
        dispatch(setNowplay(response.data.results));

    },[dispatch]
    )
    
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
      console.log("popular")
      dispatch(setPopular(response.data.results));
  },[dispatch]
)
    
    const toprate = useCallback (
      async () =>{
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated",
            {
                mentod: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODM1ODI5My43Mjk1MDgsInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ftvZlY5B_n9dnuha26yeo8b3wXoqkb4jZ4AOOvRBVo'
                  }
            }
        )
        const data = await response.data
        console.log(data)
        dispatch(setTopRate(response.data.results));
    },[dispatch]
    )
    
    const upcooming = useCallback(async () =>{
      const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming",
          {
              mentod: 'GET',
              headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZkNmRmYmE1NGE0MzIyMTBhNmVkMTBmNWVmOTUyOSIsIm5iZiI6MTcyODM1ODI5My43Mjk1MDgsInN1YiI6IjY3MDQ5MjAxNWY5NTg5MjQ4OGJmZmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ftvZlY5B_n9dnuha26yeo8b3wXoqkb4jZ4AOOvRBVo'
                }
          }
      )
      const data = await response.data
      console.log("up")
      dispatch(setUpcoming(response.data.results));
  }, [dispatch])

    const getrandom = useCallback ( ()=> {
        const randomindex = Math.floor(
          Math.random() * playnowfim?.length 
        )
        const randomfilm = playnowfim[randomindex];
        setRandomMovie(randomfilm)
    }, [playnowfim])

    

    useEffect (() => {
        const getdata = async () => {
          try {
            await Promise.all([
              playnow(),
              popular(),
              toprate(),
              upcooming(),    
            ]);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
        getdata();  
      }, [ playnow, popular, toprate, upcooming]);

      useEffect(() => {
        getrandom()
      }, [getrandom])

  return (
   <HomeView 
    nowPLay={playnowfim}
    popular={populars}
    topRate={topRate}
    upCooming={upCooming}
    randomfilm={randomfilm}
   />
  )
}

export default Home