import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
  const {setSearchKey,searchKey} = props;

  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
  >
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
   
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Recipes"
      inputProps={{ 'aria-label': 'search recipes' }}
      value = {searchKey}
      onChange={(e)=>setSearchKey(e.target.value)}
    />
  </Paper>
  )
}

export default Search