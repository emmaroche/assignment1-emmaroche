# Assignment 1 - ReactJS app.

Name: Emma Roche (20088680)

## Overview.

On my movies app assignment you can view movie details as before by clicking on a movie card, but now it includes the cast for the movie. When you click on a cast member you can see their biography and pictures. There is a button beside the favourite button on the movie cards that when you click it shows you similar movies to the movie card you clicked on. You can now also filter the movies on each page by rating by using the filer movie card. There are now two new menu optons called 'Now Playing' and 'Top rated' where you can see now playing and top rated movie lists.

### Features.

+ There is a new view added to the menu option on the site header called 'Now Playing' where you can see a list of now playing movies.

+ There is a new view added to the menu option on the site header called 'Top rated' where you can see a list of top rated movies.

+ There is a 'Similar movies' clickable button under the movie cards, where it bringd you to a page that displays pictures and names of movies that are similar to the movie clicked on.

+ There is a rating filter added to the filter card where it will only show the movies on that page with the ratings matching or higher than the number you enter.

+ Instead of click a 'more info' button on the movies card, I have made it so you can just click on the movie image and it will bring you to the movie details page.

+ You can now see the Cast pictures and names and characters they played as, under the more details section of the movies.

+ When you click on a cast member it will bring you to a page where it shows their biography and a scrollable section with more pictures of the actor/actress.

+ I have added a scrollable grid to the pictures on the left of the screen on the movies details page via the templateMoviePage.

+ I have added a new movie icon image to the filter card.

+ I have changed the header, similar movies button and filter card background colour to primary blue.

+ I changed the presentation of the movie release date and movie rating on the movie cards.

+ I added a home button icon beside the 'tmdb client' title where you can click to retutn to the home page no matter what page you are on, this is to prevent having to click through mulitple back arrows to get back to the home page if you are a few pages deep into something.

+ I added responsive UI components such as ImageLists and Grids to the sections that didn't have these responsive features previosuly and to the sections I newly added to make the app responsive.

## Setup requirements.

I made a new git repository on github.com and then followed the relevant steps via the terminal to install what was nescessary, create the files and folders needed to add into my assignment folder to push to the git repo. Then I zipped my movies folder from the in class labs to my newly created assignemnt folder. I then unzipped it once in the folder. Once that was added I pushed the assignment folder to git and my movie labs were now there as a base to start working on the assignment. I then opened my movies folder, within the assignemnt folder, in Visual Studio Code and used npm start to get it up and runnning via http://localhost:3000/ on my google chrome.

## API endpoints.

+ Discover list of now playing movies - path: movie/now_playing 
endpoint: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ Discover list of top rated movies - path: /movie/top_rated
endpoint: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ See the cast members of each movie you click on - path: /movie/{movie_id}/credits 
endpoint: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

+ See the biography and pictures of the actor/actress you click on in the cast secrion  - paths: /person/{person_id} 
endpoint: `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ See the pictures of the actor/actress you click on in the cast secrion  - path: /person/{person_id}/images 
endpoint: `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ See the similar movies for the movie you click on - path: /similar/:id 
endpoint: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`

## Routing.

+ /movie/now_playing - NowPlayingMoviesPage.js - Displays the movies that are now playing

+ /movie/top_rated - TopRatedMoviesPage.js - Displays the top rated movies

+ /similar/:id - similarMoviesPage.js - Displays similar movies to the movie that you click on

+ /person/:id - moviePersonPage.js - Displays biography and pictures of the cast member you click on

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs)