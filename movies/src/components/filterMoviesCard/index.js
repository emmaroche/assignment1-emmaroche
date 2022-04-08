
import React from "react";
import { getGenres } from "../../api/tmdb-api";
import { getTrendingMovie } from "../../api/tmdb-api"; 
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { useQuery } from "react-query";
import Spinner from '../spinner'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import TopRatedMoviePage from "../topRated";

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  
  export default function FilterMoviesCard(props) {
    const { data, error, isLoading, isError } = useQuery("genres", getGenres, );
    
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

    const genres = data.genres;
    if (genres[0].name !== "All"){
      genres.unshift({ id: "0", name: "All" });
    }

    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
  
    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };
  
    const handleGenreChange = (e) => {
      handleChange(e, "genre", e.target.value);
    };

  const handleTopChange = (e, props) => {
      handleChange(e, "vote_average", e.target.value);
    };

  return (
    <Card 
      sx={{
        maxWidth: 1000,
        backgroundColor: "#1e88e5"
      }} 
      variant="outlined">
      <CardContent>

        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          {" "} Filter movies
        </Typography>

      <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      value={props.titleFilter}
      onChange={handleTextChange}
    />
        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
    labelId="genre-label"
    id="genre-select"
    defaultValue=""
    value={props.genreFilter}
    onChange={handleGenreChange}
  >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>


      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      sx={{...formControl}}
      id="filled-number"
      label="Ratings"
      type="number"
      variant="filled"
      value={props.ratingFilter}
      onChange={handleTopChange}
      
    />

    
    
{/* 
        <FormControl sx={{...formControl}}>
          <InputLabel id="top-label">Top Rated</InputLabel>
          <Select
    labelId="top-label"
    id="top-select"
    defaultValue=""
    value={props.ratingFilter}
    onChange={handleTopChange}
  >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.vote_average} value={genre.vote_average}>
                  {genre.vote_average}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl> */}


        {/* <FormControl sx={{...formControl}}>
          <InputLabel id="top-label">Trending </InputLabel>
          <Checkbox
    labelId="top-label"
    id="top-select"
    defaultValue=""
    value={props.topRatedFilter}
    onChange={handleTopChange}
  >
            {trending?.map((objects) => {
              return (
                <TopRatedMoviePage key={objects.id} value={objects.id}>
                 
                </TopRatedMoviePage>
              );
            })}
          </Checkbox>
        </FormControl> */}

        

    
      </CardContent>
    
    </Card>
  );
}