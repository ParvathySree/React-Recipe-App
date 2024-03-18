import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {RECIPE_API_ENDPOINT} from '../../utils/constants/constants';

const RecipeBody = (props) => {
  const {searchKey} = props
  const [recipeData,setRecipeData] = useState([]);
  const APP_ID = process.env.REACT_APP_API_ACCOUNT_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  
  useEffect(() => {
    getRecipeData();
  }, [])
  
  
  const getRecipeData = async () => {
    const apiUrl = `${RECIPE_API_ENDPOINT}?type=public&q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`;;
    const data = await axios.get(apiUrl);
    const json = await data.json;
    }
  
  return (
    <div>

    </div>
  )
}

export default RecipeBody