import React from "react";
import { getGenres } from "../../api/tmdb-api";
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
import img from '../../images/star.png'
import { useQuery } from "react-query";
import Spinner from '../spinner'


const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  
  export default function FilterRatingCard(props) {
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
          {" "} Filter ratings
        </Typography>

    
      <TextField 
      sx={{...formControl}}
      id="filled-number"
      label="Ratings"
      type="number"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      variant="filled"
      value={props.ratingFilter}
      onChange={handleTopChange}
      
    />
      
      <div>&nbsp;</div>
        {/* <CardMedia
        sx={{ height: 150 }}
        image={img}
        title="Filter"
        
      /> */}

      </CardContent>

           

     
    
    </Card>
  );
}