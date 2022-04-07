# Assignment 1 - ReactJS app.

Name: Emma Roche (20088680)

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ You can now see the Cast pictures and names under the more info section of the movies.

+ When you click oin a cast member it will bring you to a page where it shows more pictures of the actor/actress and their biography.

+ There is now a 'Similar movies' clickable option where it goves pictures and names of movies that are similar to the movie clicked on.

+ There is a navigation option called 'Now Playing' where you can see the now playing movies.

+ etc
+ etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of now playing movies - path: movie/now_playing endpoint: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ See the cast members of each movie you click on - path: /movie/{movie_id}/credits endpoint: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

+ See the biography and pictures of the actor/actress you click on in the cast secrion  - paths: /person/{person_id} & 
/person/{person_id}/images endpoints: `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}` & `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}` 

+ See the similar movies for the movie you click on - path: /similar/:id endpoint: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /similar/:id - similarMoviesPage.js - Displays similar movies to the movie you click on
+ /movie/now_playing - NowPlayingMoviesPage.js - Displays Now PLaying movies
+ /person/:id - moviePersonPage.js - Displays biography and pictures of cast memebers you click on

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs)