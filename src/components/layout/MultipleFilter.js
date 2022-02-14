 import React, {useEffect, useState, useCallback} from 'react';
 import {useDispatch, useSelector} from 'react-redux';
 import Select from 'react-select';
 import {searchMovieMultipleCategory} from '../../actions/searchActions'
 import '../../App.css'

 
 function MultipleFilter(props) {
  const categories = useSelector(state => state).moviesReducer.categories;
  const dispatch = useDispatch();

  const [value, setValue]= useState()
  let selectedCategories = []

  const handleSelect = (e) => {
    selectedCategories = e.map(x => x.label )
    dispatch(searchMovieMultipleCategory(selectedCategories));
    selectedCategories.length ===0 ? props.parentCallback(false) : props.parentCallback(true)
  }

   return (
     <div >
       <Select 
          isMulti 
          options={categories} 
          onChange={handleSelect}
          styles={customStyles} 
          className='select' 
          placeholder='Select Category...' 
        />
     </div>
   )
 }
 const customStyles = {
  control: base => ({
    ...base,
    height: 55,
    minHeight: 35
  })
};
 
 export default MultipleFilter;