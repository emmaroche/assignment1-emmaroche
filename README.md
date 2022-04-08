# Assignment 1 - ReactJS app.

Name: Emma Roche (20088680)

## Overview.

[A brief statement on the content of this repository.]

On my movies app assignment you can, view movie details as before but now it shows you the cast for the movie. When you click on a cast member you can now see their biography and pictures. There is a button beside the favourite button on the movie cards that when you click it shows you similar movies to the movie you click on. You can now also filter the movies on each page by rating.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ You can now see the Cast pictures and names under the more info section of the movies.

+ When you click on a cast member it will bring you to a page where it shows more pictures of the actor/actress and their biography.

+ There is now a 'Similar movies' clickable option where it goves pictures and names of movies that are similar to the movie clicked on.

+ There is a navigation option called 'Now Playing' where you can see the now playing movies.

+ There is a rating filter where it will only show the movies on that page with the ratings with or higher than the number you enter.

+ Instead of click a 'more info' button, I have made it so you can just click on the movie image and it will bring you to the movie details.

+ I have added a scrollable grid to the pictures on the left of the screen on the movies details page via the templateMoviePage.

+ I have added a new movie icon to the filter card.

+ I have changed the header, similar movies button and filter card colour to primary blue.

+ I changed the layout of the movie relase date and movie rating on the movie cards.

+ I added a home button icon beside the tmdb title where you can click to retutn to the home page no matter what page you are, this is to prevent having to always click through mulitple back arrows to get back to the home page.

+ I added ImageLists and Grids to the sections that didnt have responsiveness previosuly and to the sections I newly added to make the app responsive.

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

I made a new git repository on github.com and then followed the relevant steps via the terminal to install what was nescessary, create the files and folders needed to add into my assignment folder to push to the git repo. Then I zipped my movies folder from the in class labs to my newly created assignemnt folder. I then unzipped it once in the folder. Once that was added I pushed the assignment folder to git and my movie labs were now there as a base to start working on the assignment. I then opened my movies folder, within the assignemnt folder, in Visual Studio Code and used npm start to get it up and runnning via http://localhost:3000/ on my google chrome.

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 


+ Discover list of now playing movies - path: movie/now_playing 
endpoint: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ See the cast members of each movie you click on - path: /movie/{movie_id}/credits 
endpoint: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

+ See the biography and pictures of the actor/actress you click on in the cast secrion  - paths: /person/{person_id} 
endpoint: `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ See the pictures of the actor/actress you click on in the cast secrion  - path: /person/{person_id}/images 
endpoint: `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ See the similar movies for the movie you click on - path: /similar/:id 
endpoint: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /similar/:id - similarMoviesPage.js - Displays similar movies to the movie that you click on

+ /movie/now_playing - NowPlayingMoviesPage.js - Displays Now Playing movies

+ /person/:id - moviePersonPage.js - Displays biography and pictures of the cast member you click on


## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs)