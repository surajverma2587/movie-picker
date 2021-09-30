const movies = [
  {
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BNWMxOTMwMzktYjcyZS00MGY4LWJkYjMtYmViYzRkZTgwZDIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    title: "Gemini",
    year: "2017",
  },
  {
    title: "Fast and Furious",
    year: "1939",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMjAyNTQ1NjA3Ml5BMl5BanBnXkFtZTgwOTIyNjIxMzE@._V1_SX300.jpg",
  },
  {
    title: "Peaky Blinders",
    year: "2013–",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SX300.jpg",
  },
  {
    title: "Matrix",
    year: "1993",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg",
  },
  {
    title: "Roma",
    year: "2018",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg",
  },
  {
    title: "Zodiac",
    year: "2007",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    title: "Marriage Story",
    year: "2019",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
  },
  {
    title: "No Country for Old Men",
    year: "2007",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
  },
  {
    title: "There Will Be Blood",
    year: "2007",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
  },
  {
    title: "Candyman",
    year: "1992",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "Uncut Gems",
    year: "2019",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  {
    title: "The White Tiger",
    year: "2021",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMDVkMDRkMzItN2EyYS00ZTI5LTljYzgtNzRmZDQ0OTQ3M2VjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  {
    title: "RoboCop",
    year: "1987",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
];

const results = [];

let currentIndex = 0;

const moviesContainer = document.querySelector("#movies-container");

const handleSelection = function (event) {
  console.log("user clicked on select btn");
  // console log selected movie
  const btnClicked = event.target;
  const index = parseInt(btnClicked.getAttribute("data-index"));

  results.push(movies[index]);

  currentIndex += 1;

  moviesContainer.innerHTML = "";
  renderMovies();
  console.log(results);
};

const constructMovieCard = function (movie, index) {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.setAttribute("data-index", index);
  btn.textContent = "Select";

  const btnDiv = document.createElement("div");
  btnDiv.appendChild(btn);

  const movieH3 = document.createElement("h3");
  movieH3.textContent = movie.title;

  const movieH4 = document.createElement("h4");
  movieH4.textContent = movie.year;

  const img = document.createElement("img");
  img.setAttribute("src", movie.imageurl);

  const imgDiv = document.createElement("div");
  imgDiv.appendChild(img);

  const movieCardDiv = document.createElement("div");
  movieCardDiv.setAttribute("class", "movie-card");

  movieCardDiv.append(imgDiv, movieH3, movieH4, btnDiv);

  btn.addEventListener("click", handleSelection);

  return movieCardDiv;
};

const renderMovies = function () {
  console.log("render movies", currentIndex);
  // get 2 movies from the array

  // construct movie card 1
  const movieCard1 = constructMovieCard(movies[currentIndex], currentIndex);

  // construct movie card 2
  const movieCard2 = constructMovieCard(
    movies[currentIndex + 1],
    currentIndex + 1
  );

  // append movie cards to parent

  moviesContainer.append(movieCard1, movieCard2);
};

const renderShowResultsButton = function () {};

const renderMoviesList = function () {};

const onLoad = function () {
  // render 2 movies in the movies container
  renderMovies();
};

window.addEventListener("load", onLoad);
