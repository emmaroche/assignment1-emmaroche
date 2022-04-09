# Assignment 1 - ReactJS app.

Name: Emma Roche (20088680)

## Overview.

On my movies app assignment you can view movie details as before by clicking on a movie card, but now it includes the cast for the movie. When you click on a cast member you can see their biography and pictures. There is a button beside the favourite button on the movie cards that when you click it shows you similar movies to the movie card you clicked on. You can now also filter the movies on each page by rating by using the ratings filter movie card. There are now two new menu optons called 'Now Playing' and 'Top rated' where you can see now playing and top rated movie lists.

### Features.

+ There is a new view added to the menu option on the site header called 'Now Playing' where you can see a list of now playing movies.

+ There is a new view added to the menu option on the site header called 'Top rated' where you can see a list of top rated movies.

+ There is a 'Similar movies' clickable button under the movie cards, where it bringd you to a page that displays pictures and names of movies that are similar to the movie clicked on.

+ There is a new rating filter card added under the original filter card where it will only show the movies on that page with the ratings matching or higher than the number you enter.

+ Instead of click a 'more info' button on the movies card, I have made it so you can just click on the movie image and it will bring you to the movie details page.

+ You can now see the Cast pictures, their names and the characters they played in the movie, under the more details section of the movies.

+ When you click on a cast member it will bring you to a page where it shows their biography and a scrollable section with more pictures of the actor/actress.

+ I have added a scrollable imageList to the movie posters on the left of the screen on the movies details page.

+ I have changed the header, similar movies button and filter card background colour to primary blue.

+ I changed the presentation of the movie release date and movie rating on the movie cards.

+ I added responsive UI components such as ImageLists and Grids to the sections that didn't have these responsive features previosuly and to the sections I newly added to make the app responsive.

+ I made the movie cards wider so now only 3/4 movie cards are shown in a row instead of 5.

## Setup requirements.

I made a new git repository on github.com and then followed the relevant steps via the terminal to install what was nescessary, create the files and folders needed to add into my assignment folder to push to the git repo. Then I zipped my movies folder from the in class labs to my newly created assignemnt folder. I then unzipped it once in the folder. Once that was added I pushed the assignment folder to git and my movie labs were now there as a base to start working on the assignment. I then opened my movies folder, within the assignemnt folder, in Visual Studio Code and used npm start to get it up and runnning via http://localhost:3000/ on my google chrome.

## API endpoints.

+ Now Playing movies - path: movie/now_playing 
URL: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ Top Rated movies - path: /movie/top_rated
URL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ Movie credits - path: /movie/{movie_id}/credits 
URL: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

+ People details  - path: /person/:id
+ URL: `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ People images - path: /person/{person_id}/images 
URL: `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ Movie Recommendations  - path: /movie/{movie_id}/recommendations 
URL:  `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ Similar movies - path: /similar/:id
URL: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`

## Routing.

+ /movie/now_playing - NowPlayingMoviesPage.js - Displays view of the movies that are now playing.

+ /movie/top_rated - TopRatedMoviesPage.js - Displays view of the top rated movies.

+ /similar/:id - similarMoviesPage.js - Displays view of similar movies to the movie that you click on.

+ /person/:id - moviePersonPage.js - Displays view of biography and pictures of the cast member you click on in the movie details page.

## Independent learning (If relevant).

I researched more into the use of imageList API via [MUI](https://mui.com). While researching how to use imageList for my cast section I found another component API called <ImageListItemBar> which helped me add a caption under the Imagelists to display the casts name and roles and to display the similar movie names.
