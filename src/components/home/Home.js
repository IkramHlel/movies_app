import './home.css';
import React, { useEffect, useReducer, useState, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMovies} from '../../actions/searchActions';
import {searchLoading, fetchMoviesCategory,getMoviesCategories} from '../../actions/searchActions';
import MovieCard from './MovieCard';
import Spinner  from '../layout/Spinner';
import MultipleFilter from '../layout/MultipleFilter';
import ReactPaginate from 'react-paginate';
import { Select } from '@material-ui/core';



function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state).moviesReducer.loading;
  const moviesByCategories = useSelector(state => state).moviesReducer.moviesByCategories;
  const movies= useSelector(state => state).moviesReducer.movies;
  const categories = useSelector(state => state).moviesReducer.categories;
  
  let content = '';
  const [moviePerPage, setMoviePerPage] = useState(4);
  const [allMovies, setAllMovies] = useState(movies.slice(0,12))
  const [pageNumber, setPageNumber] = useState(0);
  const [rerender, setRerender] = useState(false);

  let pagesVisited = pageNumber * moviePerPage;
  const pagesToVisit = pagesVisited + moviePerPage;
  const pageCount = moviesByCategories.length === 0 
    ? Math.ceil(movies.length / moviePerPage)
    : Math.ceil(moviesByCategories.length / moviePerPage)

  useEffect(()=>{
      dispatch(getMoviesCategories());
      setRerender(!rerender)
    },[])

  const handleChangePage = ({selected}) => {
    setPageNumber(selected)}

  const handleNumMovie = (e) => {
    setMoviePerPage(parseInt(e.target.value))
    setPageNumber(0);
  }
  const [selectedCategory, setSelectedCategory] = useState(false)
  const callback = (selectedCategory) => {
    setSelectedCategory(selectedCategory)
  }

  const displayMovies = () =>
    movies.length >0 && moviesByCategories.length === 0 && !selectedCategory
    ?  movies.slice(pagesVisited, pagesVisited + moviePerPage).map((movie, index) => <MovieCard key={index} movie={movie}/>)
    :moviesByCategories
    .slice(pagesVisited, pagesVisited + moviePerPage)
    .map((movie, index) => <MovieCard key={index} movie={movie}/>)
    content = displayMovies();

  return (
    <div className='home'>
      <MultipleFilter parentCallback={callback} categories={categories}/>
      <div className='movies'>
        {movies.length > 0 ? content : <Spinner/>}
      </div>
      <div className='pagination'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={"Next"}
          pageCount= {pageCount}
          onPageChange={handleChangePage}
          containerClassName={'paginationBttns'}
          activeClassName={"paginationActive"}
        ></ReactPaginate>
        <div className='selectRow'>
          <b style={{}}>Rows Per Page: </b>
          <select className='dropdown' value={moviePerPage} onChange={handleNumMovie}>
            <option>4</option>
            <option>8</option>
            <option>12</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Home;

