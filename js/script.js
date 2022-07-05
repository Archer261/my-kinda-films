/*List of questions stored in an object*/
var questions =
    [
        {
            question: "What is your ideal movie length?",
            choices: [{ text: "Less than 90 minutes.", param: "with_runtime.lte" }, { text: "More than 90 minutes.", param: "with_runtime.gte" }],

        },

        {
            question: "What is your favorite movie genre?",
            choices: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "TV Movie", "War", "Western"],

        },
        {
            question: "What is your favorite movie genre?",
            choices: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "TV Movie", "War", "Western"],

        }


    ]

/* API Configuration - Gets movie data and stores it in a function */
var getMovieData = function fetchMovieData(mLength, mGenre, mAge) {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d68384526c8f6fabc89f85ba5e6c3f5a&language=en-USZ&genre=drama')
        .then((response) => { return response.json() })
        .then((data) => {
            top3Movies = data.results.slice(0, 3);
            for (var m in top3Movies) {
                return console.log(top3Movies[m]), console.log(top3Movies[m].backdrop_path);
            }

        });
}


//console.log(movieData);
getMovieData();