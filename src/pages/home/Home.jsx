import React, { useContext } from 'react'
import "./home.css"
import bg from "../../../src/images/bg.png"
// import Sidebar from '../../components/sidebar/Sidebar'
// import Rightbar from '../../components/rightbar/Rightbar'
import { AppContext } from '../../context/AppContext'
import MovieCard from '../../components/moviecard/MovieCard'

export default function Home() {
  const {menuClick} = useContext(AppContext)
  return (
    <section className={ menuClick ? "menuclick__resize" : "home" }>
      <div className='home__bg__img'>
       {/* <img src={bg} alt="" className={menuClick ?'home__bgimag__resize' : 'home__bgimag'} /> */}
      </div>
      <div>
        <div className='featured__movie__container'>
          <h1>Featured Movie</h1>
            <div className='show__more'>
              <p>Show more</p> <span><i className='fas fa-caret-right'></i></span>
            </div>
        </div>
        <MovieCard />
      </div>
    </section>
  )
}
