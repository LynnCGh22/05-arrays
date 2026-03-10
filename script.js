// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;
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

  const selectedGenre = document.getElementById("genre").value;

  if (selectedGenre === "Comedy") {
    console.log(comedyMovies);
  } else if (selectedGenre === "Action") {
    console.log(actionMovies);
  } else if (selectedGenre === "Drama") {
    console.log(dramaMovies);
  } else if (selectedGenre === "Sci-Fi") {
    console.log(sciFiMovies);
  }

  document.getElementById("movieRecommendations").innerText = `Enjoy: !`;
});
  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    console.log("You selected 'Comedy'");
  } else if (selectedGenre === "Action") {
    console.log("You selected 'Action'");
  } else if (selectedGenre === "Drama") {
    console.log("You selected 'Drama'");
  } else if (selectedGenre === "Sci-Fi") {
    console.log("You selected 'Sci-Fi'");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: !`;
});
