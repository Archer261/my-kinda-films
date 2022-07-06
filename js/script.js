/*List of questions stored in an object*/
var questions =
    [
        {
            question: "What is your ideal movie length?",
            choices: [{ text: "Less than 90 minutes.", param: "with_runtime.lte" }, { text: "More than 90 minutes.", param: "with_runtime.gte" }],

        },

        {
            question: "What is your favorite movie genre?",
            choices: [{ text: "Action", param: "28" }, { text: "Adventure", param: "12" }, { text: "Animation", param: "16" }, { text: "Comedy", param: "35" }, { text: "Crime", param: "80" }, { text: "Documentary", param: "99" }, { text: "Drama", param: "18" }, { text: "Family", param: "10751" }, { text: "Fantasy", param: "14" }, { text: "History", param: "36" }, { text: "Horror", param: "27" }, { text: "Music", param: "10402" }, { text: "Mystery", param: "9648" }, { text: "Romance", param: "10749" }, { text: "Science Fiction", param: '878' }, { text: "Thriller", param: "53" }, { text: "TV Movie", param: "10770" }, { text: "War", param: "10752" }, { text: "Western", param: "37" }],

        },
        {
            question: "What is your favorite movie genre?",
            choices: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "TV Movie", "War", "Western"],

        }


    ];


/*Container variables*/

//const strtBtn = ;
const questionCont = document.getElementById('questionaire-div');
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');


function storeAnswer(event) {

}


/*API Configuration - Gets a random activity from /*    

/*Get Question from questions object */
var questionObj = function getQuestion(qIndex) {
    createQuestion = document.createElement('h2');
    var q = questions[qIndex].question;

    createQuestion.innerText = q;
    questionDiv.appendChild(createQuestion);
    var a = questions[qIndex].choices.forEach(answer => {
        var createBtn = document.createElement('button')
        createBtn.innerText = answer.text;
        createBtn.addEventListener('click', console.log('test'))
    });
    //return q, a;
}

/*Generate Questions*/
function showQuestion() {
    //$(this).hide();
    //$(this).show();
    let qIndex = 0;
    let qPrompt = questionObj(qIndex);
    console.log("test " + qPrompt);
}




/* API Configuration - Gets movie data and stores it in a function */
var getMovieData = function fetchMovieData(mLength, mGenre, mAge) {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d68384526c8f6fabc89f85ba5e6c3f5a&language=en-USZ&with_genres=${mGenre}&${mLength}=90&sort_by=vote_average.desc&vote_count.gte=10`)
        .then((response) => { return response.json() })
        .then((data) => {

            /**Stores top 3 results in variable */

            movieRes = data.results.slice(0, 3);

            return console.log(movieRes);
            //,console.log(data.results[0].backdrop_path);
        });
}


//test api call
//getMovieData("with_runtime.lte", [14, 12, 35]);

//questionObj(0);
//showQuestion();
questionObj(0);