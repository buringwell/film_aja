import './App.css'
import Home from './page/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Navbar from './components/Navbar'
import Detail from './page/detail/Detail'
import Footer from './components/Footer'
import Search from './page/search/Search'
import Ratingview from './page/rating/Ratingview'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/search' element={<Search/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/rating' element={<Ratingview/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
