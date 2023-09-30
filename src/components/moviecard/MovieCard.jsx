import React, { useContext } from 'react'
import "./moviecard.css"
import img from "../../../src/images/bg.png"
import { AppContext } from '../../context/AppContext'

export default function MovieCard() {
  const {menuClick} = useContext(AppContext)

  return (
    <section className= 'movie__card__container'>
       <figure className='movie__card__wrapper'>
        <img src={img} className='card__img' alt="" />
          <div className='movie__info__wrapper'>
            <div className="watchtime__container">
             <span className="release__date">USA 2007</span>
             <span className="watchtime">1hr 34m</span>
            </div>
             <h2 className="title">Denbrik</h2>
             <div className="rating__container">
               <span className="rating"> <i className='fas fa-star'></i>87/100</span>
               <span className="rating"> <i className='fas fa-heart'></i>77%</span>
             </div>
             <p className="genere">Action</p>
          </div>
       </figure>
       <figure className='movie__card__wrapper'>
        <img src={img} className='card__img' alt="" />
          <div className='movie__info__wrapper'>
            <div className="watchtime__container">
             <span className="release__date">USA 2007</span>
             <span className="watchtime">1hr 34m</span>
            </div>
             <h2 className="title">Denbrik</h2>
             <div className="rating__container">
               <span className="rating"> <i className='fas fa-star'></i>87/100</span>
               <span className="rating"> <i className='fas fa-heart'></i>77%</span>
             </div>
             <p className="genere">Action</p>
          </div>
       </figure>
       <figure className='movie__card__wrapper'>
        <img src={img} className='card__img' alt="" />
          <div className='movie__info__wrapper'>
            <div className="watchtime__container">
             <span className="release__date">USA 2007</span>
             <span className="watchtime">1hr 34m</span>
            </div>
             <h2 className="title">Denbrik</h2>
             <div className="rating__container">
               <span className="rating"> <i className='fas fa-star'></i>87/100</span>
               <span className="rating"> <i className='fas fa-heart'></i>77%</span>
             </div>
             <p className="genere">Action</p>
          </div>
       </figure>
       <figure className='movie__card__wrapper'>
        <img src={img} className='card__img' alt="" />
          <div className='movie__info__wrapper'>
            <div className="watchtime__container">
             <span className="release__date">USA 2007</span>
             <span className="watchtime">1hr 34m</span>
            </div>
             <h2 className="title">Denbrik</h2>
             <div className="rating__container">
               <span className="rating"> <i className='fas fa-star'></i>87/100</span>
               <span className="rating"> <i className='fas fa-heart'></i>77%</span>
             </div>
             <p className="genere">Action</p>
          </div>
       </figure>
       <figure className='movie__card__wrapper'>
        <img src={img} className='card__img' alt="" />
          <div className='movie__info__wrapper'>
            <div className="watchtime__container">
             <span className="release__date">USA 2007</span>
             <span className="watchtime">1hr 34m</span>
            </div>
             <h2 className="title">Denbrik</h2>
             <div className="rating__container">
               <span className="rating"> <i className='fas fa-star'></i>87/100</span>
               <span className="rating"> <i className='fas fa-heart'></i>77%</span>
             </div>
             <p className="genere">Action</p>
          </div>
       </figure>
       <figure className='movie__card__wrapper'>
        <img src={img} className='card__img' alt="" />
          <div className='movie__info__wrapper'>
            <div className="watchtime__container">
             <span className="release__date">USA 2007</span>
             <span className="watchtime">1hr 34m</span>
            </div>
             <h2 className="title">Denbrik</h2>
             <div className="rating__container">
               <span className="rating"> <i className='fas fa-star'></i>87/100</span>
               <span className="rating"> <i className='fas fa-heart'></i>77%</span>
             </div>
             <p className="genere">Action</p>
          </div>
       </figure>
       <figure className='movie__card__wrapper'>
        <img src={img} className='card__img' alt="" />
          <div className='movie__info__wrapper'>
            <div className="watchtime__container">
             <span className="release__date">USA 2007</span>
             <span className="watchtime">1hr 34m</span>
            </div>
             <h2 className="title">Denbrik</h2>
             <div className="rating__container">
               <span className="rating"> <i className='fas fa-star'></i>87/100</span>
               <span className="rating"> <i className='fas fa-heart'></i>77%</span>
             </div>
             <p className="genere">Action</p>
          </div>
       </figure>
    </section>
  )
}
