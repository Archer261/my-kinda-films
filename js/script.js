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
            question: "What is your favorite movie genre?"//,
            //choices: [{text: , param: },

        }



    ];


/*Container variables*/

const strtBtn = $('#strtBtn');
const prevBtn = $('#prev').hide();
const nextBtn = $('#next').hide();
const questionCont = document.getElementById('questionaire-div');
const qCont = $('questionaire-div');
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');


function storeAnswer(val) {
    event.preventDefault();
    localStorage.setItem(val.target.id, val.target.value)
    //console.log(val.target.value)
}



/**Generates Button for answers */
function genBtn(test) {
    event.stopPropagation()
    qCont.empty();
    var choiceBtn = document.createElement('input');
    choiceBtn.className = 'waves-effect waves-light btn-large';
    choiceBtn.id = 'choice' + '-' + choiceBtn.param;
    choiceBtn.innerHTML = test.text;
    choiceBtn.value = test.text;
    choiceBtn.type = "button";
    questionDiv.appendChild(choiceBtn);
    choiceBtn.addEventListener('click', storeAnswer);

}



/*Get Question from questions object */
function questionObj(qIndex) {
    event.preventDefault()
    createQuestion = document.createElement('h2');
    var q = questions[qIndex].question;

    createQuestion.innerText = q;
    questionDiv.appendChild(createQuestion);
    var a = questions[qIndex].choices.forEach(answer => {
        genBtn(answer);
    });
    //return q, a;
}

/*Generate Questions*/
function showQuestion() {
    let qIndex = 0;
    prevBtn.show();
    nextBtn.show();
    strtBtn.hide();
    //$(this).show();

    let qPrompt = questionObj(qIndex);
    prevBtn.on('click', function () { prevQ(qIndex) });
    nextBtn.on('click', function () { nextQ(qIndex) });
    console.log(q)
}

/* Function for Next Button */
function nextQ(indx) {
    if (indx < questions.length) {
        indx++;
        qCont.empty();
        questionObj(indx);
    }
}

/* Function for Prev Button */
function prevQ(indx) {
    if (indx < 0) {
        indx--;
        qCont.empty();
        questionObj(indx);
    }
}


/* API Configuration - Gets movie data and stores it in a function */
/*var getMovieData = function fetchMovieData(mLength, mGenre, mAge) {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d68384526c8f6fabc89f85ba5e6c3f5a&language=en-USZ&with_genres=${mGenre}&${mLength}=90&sort_by=vote_average.desc&vote_count.gte=10`)
        .then((response) => { return response.json() })
        .then((data) => {

            /**Stores top 3 results in variable */

/*movieRes = data.results.slice(0, 3);

return console.log(movieRes);
//,console.log(data.results[0].backdrop_path);

]*/

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


/*Bored API Configuration - Gets a random activity from */
var getRanAct = function () {
    fetch('https://www.boredapi.com/api/activity/')
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data.activity) });
}



//test api call
//getMovieData("with_runtime.lte", [14, 12, 35]);

//questionObj(0);
//showQuestion();
//questionObj(0);

//console.log(movieData);
//getMovieData();

//getRanAct();

//genBtn();
strtBtn.on('click', showQuestion);
console.log(questions.length);