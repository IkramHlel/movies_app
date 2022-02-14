import {SEARCH_MOVIE_CATEGORY,
    SEARCH_LOADING,
     FETCH_MOVIES, FETCH_MOVIES_CATEGORY, DELETE_MOVIE, ADD_LIKE, ADD_DISLIKE,
     GET_MOVIES_CATEGORIES} from './types';
import {movies$} from '../movies';

export const getAllMovies = () => dispatch => {
    var updatedData = [];
    movies$.then(data => {updatedData = data.map(movie => {return {...movie, liked:false, disliked:false}})
        dispatch({
        type: FETCH_MOVIES,
        payload: updatedData,
    })}
    )
    // dispatch(getMoviesCategories()); // array of movies
    
}

export const searchLoading = (isLoading) => dispatch =>{
    dispatch({
    type: SEARCH_LOADING,
    payload: isLoading,
  });
}

export const getMoviesCategories = () => (dispatch, getState) => {
    let categories;
    // const movies = getState().moviesReducer.movies
    // const mapped = movies.map((movie, index) => movie.category);
    movies$.then(data => {const mapped = data.map((movie, index) => movie.category)
    const filtered = mapped.filter((category, index) =>  mapped.indexOf(category) === index  )
    categories = filtered.map((category,index) => {return{value:index,label:category}})
    console.log('categories', categories); //['comedy', 'Animation','Thriller','Drame']
    dispatch({
        type: GET_MOVIES_CATEGORIES,
        payload: categories
    })
})

}

export const searchMovieMultipleCategory = categories => (dispatch, getState) =>{
    const movies = getState().moviesReducer.movies;
    let filtered = []
    categories.forEach(elm => movies.map((item) => item.category === elm ? filtered = [...filtered, item] : null))
    // const filtered = categorie s.map(category => movies.filter((item) => item.category === category))
    dispatch({
        type: FETCH_MOVIES_CATEGORY,
        payload : filtered
    })
    dispatch(searchLoading(false));
} 

export const deleteMovie = id => (dispatch, getState) => {
    const movies = getState().moviesReducer;
    const filteredMovies = movies.movies.filter(movie => movie.id !== id)
    const filteredMoviesCat = movies.moviesByCategories.filter(movie => movie.id !== id)
        dispatch({
            type:DELETE_MOVIE,
            payload: {movies: filteredMovies, moviesByCategories:filteredMoviesCat}
        })
}

export const addLike = (id) => (dispatch, getState) => {
    const moviesByCategories = getState().moviesReducer.moviesByCategories
    const updatedCatMovies = moviesByCategories.map(movie => movie.id === id
        ? {...movie, 
            likes : !movie.liked ? movie.likes +1 : movie.likes - 1,            dislikes: !movie.liked && movie.disliked ? movie.dislikes -1 :movie.dislikes - 1, 
            dislikes: !movie.liked && movie.disliked ? movie.dislikes -1 : movie.dislikes, 
            liked:!movie.liked,
            disliked: !movie.liked && movie.disliked ? !movie.disliked : movie.disliked,
        } 
        : movie);

    const movies = getState().moviesReducer.movies
    const updatedMovies = movies.map(movie => movie.id === id
            ? {...movie,
                likes : !movie.liked ? movie.likes +1 : movie.likes - 1,            dislikes: !movie.liked && movie.disliked ? movie.dislikes -1 :movie.dislikes - 1, 
                dislikes: !movie.liked && movie.disliked ? movie.dislikes -1 : movie.dislikes, 
                liked:!movie.liked,
                disliked: !movie.liked && movie.disliked ? !movie.disliked : movie.disliked,
            }
            : movie);
    dispatch({
        type: ADD_LIKE,
        payload: {movies:updatedMovies, moviesByCategories: updatedCatMovies}
    })
}

export const addDislike = (id) => (dispatch, getState) => {
    const moviesByCategories = getState().moviesReducer.moviesByCategories
    const updatedCatMovies = moviesByCategories.map(movie => movie.id === id
        ? {...movie, 
            dislikes : !movie.disliked ? movie.dislikes +1 : movie.dislikes - 1,
            likes: !movie.disliked && movie.liked ? movie.likes -1 : movie.likes, 
            disliked:!movie.disliked,
            liked: !movie.disliked && movie.liked ? !movie.liked : movie.liked,
        } 
        : movie);

    const movies = getState().moviesReducer.movies
    const updatedMovies = movies.map(movie => movie.id === id
            ? {...movie,
                dislikes : !movie.disliked ? movie.dislikes +1 : movie.dislikes - 1,
                likes: !movie.disliked && movie.liked ? movie.likes -1 : movie.likes, 
                disliked:!movie.disliked,
                liked: !movie.disliked && movie.liked ? !movie.liked : movie.liked,
            }
            : movie);
    dispatch({
        type: ADD_DISLIKE,
        payload: {movies:updatedMovies, moviesByCategories: updatedCatMovies}
    })
}


