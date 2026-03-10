// Movie arrays for each genre
const comedyMovies = [
  "Superbad",
  "The Grand Budapest Hotel",
  "Bridesmaids",
  "Step Brothers"
];

const actionMovies = [
  "Mad Max: Fury Road",
  "John Wick",
  "The Dark Knight",
  "Mission: Impossible – Fallout"
];

const dramaMovies = [
  "The Shawshank Redemption",
  "Forrest Gump",
  "The Pursuit of Happyness",
  "A Beautiful Mind"
];

const sciFiMovies = [
  "Interstellar",
  "The Matrix",
  "Blade Runner 2049",
  "Inception"
];

// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {

  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create movie list array
  let movieList = [];

  // Assign movies to movieList based on genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText =
    `Enjoy: ${movieList.join(", ")}!`;
});