import{
    SEARCH_MOVIE_CATEGORY, 
    FETCH_MOVIES, 
    FETCH_MOVIES_CATEGORY,
    ADD_LIKE, 
    DELETE_MOVIE,
    SEARCH_LOADING,
    ADD_DISLIKE,
    GET_MOVIES_CATEGORIES,
} from '../actions/types';

const initialState = {
    text : '',
    movies : [],
    moviesByCategories : [],
    loading : false,
    liked :[],
    categories: [],
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_LOADING:
            return { ...state, loading: action.payload };
        case SEARCH_MOVIE_CATEGORY:
            return{
                ...state,
                text: action.payload,
            }
        case FETCH_MOVIES:
            return{
                ...state,
                movies: action.payload,
            }
        case FETCH_MOVIES_CATEGORY:
            return{
                ...state,
                moviesByCategories: action.payload,
                loading: false,
            }
        case ADD_LIKE:
            return{
                ...state,
                moviesByCategories: action.payload.moviesByCategories,
                movies: action.payload.movies
        }
        case ADD_DISLIKE:
            return{
                ...state,
                moviesByCategories: action.payload.moviesByCategories,
                movies: action.payload.movies
        }
        case DELETE_MOVIE: 
            return{
                ...state,
                movies: action.payload.movies,
                moviesByCategories:action.payload.moviesByCategories
            }
        case GET_MOVIES_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state; 
    }
}