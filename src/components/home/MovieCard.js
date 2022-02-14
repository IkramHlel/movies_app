import React, { useState } from 'react';
import './home.css';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltIcon from '@material-ui/icons/ThumbDown';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from 'react-redux';
import {addLike, addDislike, deleteMovie} from '../../actions/searchActions';



function MovieCard(props) {
    const movie = props.movie;
    const [dislike, setDislike] = useState(false);
    const dispatch = useDispatch();

    const handleLike = (id) => dispatch(addLike(id));
    const handleDislike = (id) => dispatch(addDislike(id));
    const handleDelete = (id) => {dispatch(deleteMovie(id))}
  return (
    <div className='card'> 
        <img className='poster' src={movie.url} width='320px' height='450px'/>
        <b className='title'>{movie.title}</b>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div className='likeContainer'>
                <button className='btn' onClick={() => handleLike(movie.id)}>
                    {movie.liked ? <ThumbUpAltIcon style={{color:'white'}}/> : <ThumbUpAltOutlinedIcon style={{color:'white'}}/>}
                </button>
                <span>{movie.likes}</span>
                <button className='btn' onClick={() => handleDislike(movie.id)}>
                    {movie.disliked ? <ThumbDownAltIcon style={{color:'white'}}/> : <ThumbDownAltOutlinedIcon style={{color:'white'}}/>}
                </button>
                <span>{movie.dislikes}</span>
            </div>
            <button className='btn' onClick={() => handleDelete(movie.id)}>
                <DeleteIcon style={{color:'white'}}/>
            </button>
           
        </div>
        
    </div>
  )
}

export default MovieCard