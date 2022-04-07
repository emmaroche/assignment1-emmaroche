import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPersonMovie } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

const PersonDetails = ({ person }) => {
console.log(person)
// const { data , error, isLoading, isError } = useQuery(
//     ["person", { id: person.id }],
//     getPersonMovie
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }


  return (
    <>

<Typography variant="h5" component="h3">
        People
      </Typography>

      <Typography variant="h6" component="p">
        {person.name}    
      </Typography>

    </>
  );
};

export default PersonDetails;