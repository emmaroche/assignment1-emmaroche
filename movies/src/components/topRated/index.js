// import React from "react";
// import MovieHeader from "../headerMovie";
// import Grid from "@mui/material/Grid";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { getTrendingMovie } from "../../api/tmdb-api";
// import { useQuery } from "react-query";
// import Spinner from '../spinner'

// const TopRatedMoviePage = ({ movie, children }) => {
//   console.log(trending.id)
//   const { data , error, isLoading, isError } = useQuery(
//     ["trending", { id: movie.id }],
//     getTrendingMovie
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
//   const trending = data.objects

//   return (
//     <>
//       <MovieHeader movie={movie} />

//       <Grid container spacing={5} sx={{ padding: "15px" }}>
//         <Grid item xs={3}>
//           <div sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-around",
//           }}>
//             <ImageList sx={{ height: 510 }} cols={2}>
            
//                 {trending.map((objects) => (
//                     <ImageListItem key={objects.poster_path} cols={1}>
//                     <img
//                         src={`https://image.tmdb.org/t/p/w500/${objects.poster_path}`}
//                         alt={objects.poster_path}
//                     />
//                     </ImageListItem>
//                 ))}
//             </ImageList>
//           </div>
//         </Grid>

//         <Grid item xs={9}>
//           {children}
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default TopRatedMoviePage;