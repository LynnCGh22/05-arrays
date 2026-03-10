// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {

  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create movieList array
  let movieList = [];

  // Add movies to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList.push(
      "Superbad",
      "The Grand Budapest Hotel",
      "Bridesmaids",
      "Step Brothers"
    );

  } else if (selectedGenre === "Action") {
    movieList.push(
      "Mad Max: Fury Road",
      "John Wick",
      "The Dark Knight",
      "Mission: Impossible – Fallout"
    );

  } else if (selectedGenre === "Drama") {
    movieList.push(
      "The Shawshank Redemption",
      "Forrest Gump",
      "The Pursuit of Happyness",
      "A Beautiful Mind"
    );

  } else if (selectedGenre === "Sci-Fi") {
    movieList.push(
      "Interstellar",
      "The Matrix",
      "Blade Runner 2049",
      "Inception"
    );
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText =
    `Enjoy: ${movieList.join(", ")}!`;
});