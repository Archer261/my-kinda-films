/*List of questions stored in an object*/
var questions =
    [
        {
            question: "What is your ideal movie length?",
            choices: [{ text: "Less than 90 minutes.", param: "with_runtime.lte", id: 'movieLen' }, { text: "More than 90 minutes.", param: "with_runtime.gte", id: 'movieLen' }],

        },

        {
            question: "What is your favorite movie genre?",

            choices: [{ text: "Action", param: "28", id: 'moviegen' }, { text: "Adventure", param: "12", id: 'moviegen' }, { text: "Animation", param: "16", id: 'moviegen' }, { text: "Comedy", param: "35", id: 'moviegen' }, { text: "Crime", param: "80", id: 'moviegen' }, { text: "Documentary", param: "99", id: 'moviegen' }, { text: "Drama", param: "18", id: 'moviegen' }, { text: "Family", param: "10751", id: 'moviegen' }, { text: "Fantasy", param: "14", id: 'moviegen' }, { text: "History", param: "36", id: 'moviegen' }, { text: "Horror", param: "27", id: 'moviegen' }, { text: "Music", param: "10402", id: 'moviegen' }, { text: "Mystery", param: "9648", id: 'moviegen' }, { text: "Romance", param: "10749", id: 'moviegen' }, { text: "Science Fiction", param: '878', id: 'moviegen' }, { text: "Thriller", param: "53", id: 'moviegen' }, { text: "TV Movie", param: "10770", id: 'moviegen' }, { text: "War", param: "10752", id: 'moviegen' }, { text: "Western", param: "37", id: 'moviegen' }],




        },
        {
            question: "What is your most disliked movie genre?",

            choices: [{ text: "Action", param: "28", id: 'moviewoGen' }, { text: "Adventure", param: "12", id: 'moviewoGen' }, { text: "Animation", param: "16", id: 'moviewoGen' }, { text: "Comedy", param: "35", id: 'moviewoGen' }, { text: "Crime", param: "80", id: 'moviewoGen' }, { text: "Documentary", param: "99", id: 'moviewoGen' }, { text: "Drama", param: "18", id: 'moviewoGen' }, { text: "Family", param: "10751", id: 'moviewoGen' }, { text: "Fantasy", param: "14", id: 'moviewoGen' }, { text: "History", param: "36", id: 'moviewoGen' }, { text: "Horror", param: "27", id: 'moviewoGen' }, { text: "Music", param: "10402", id: 'moviewoGen' }, { text: "Mystery", param: "9648", id: 'moviewoGen' }, { text: "Romance", param: "10749", id: 'moviewoGen' }, { text: "Science Fiction", param: '878', id: 'moviewoGen' }, { text: "Thriller", param: "53", id: 'moviewoGen' }, { text: "TV Movie", param: "10770", id: 'moviewoGen' }, { text: "War", param: "10752", id: 'moviewoGen' }, { text: "Western", param: "37", id: 'moviewoGen' }]

        }



    ];

/*Container variables*/

const strtBtn = $('#strtBtn');
const prevBtn = $('#prev').hide();
const nextBtn = $('#next').hide();
const finBtn = $('#finBtn').hide();

const questionCont = document.getElementById('questionaire-div');
const qCont = $('#questionaire-div').hide();
const answerCont = $('#answer').hide();
const questCont = $('#question').hide();
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');

const resultsDiv = $(".results-div");
//const mTitle = $('#mTitle');
const resultsRow = $('#resultsRow');

prevBtn.on('click', function () { prevQ() });
nextBtn.on('click', function () { nextQ() });


var index = 0


/**Function checks what each button is passing through and updates with question the user is on */
function checkQ(i) {
    if (i === null || i === undefined || i === 0) {
        /**Always hide the previous button if you're on the first question */
        prevBtn.hide();
        index = 0;
        console.log(index);
    } else if (i === -1) {
        index--;
        console.log(index);
    }
    /**Always hide the next button if you're on the last question */

    else if (i === questions.length) {
        nextBtn.hide();
        finBtn.show();
        console.log(index);
    }

    else if (i > 0 && i < questions.length) {
        finBtn.hide();
        nextBtn.show();
        prevBtn.show();
        index++
        console.log(index);
    }

}

/**Stores the value in local storage */
function storeAnswer(val) {
    event.preventDefault();
    localStorage.setItem(val.target.id, val.target.value)

}



/**Generates Button for answers */
function genBtn(test) {
    event.stopPropagation()
    var choiceBtn = document.createElement('input');
    choiceBtn.className = 'waves-effect waves-light btn-large';
    choiceBtn.id = test.id;
    choiceBtn.innerHTML = test.text;
    choiceBtn.value = test.text;
    choiceBtn.type = "button";
    questionDiv.appendChild(choiceBtn);
    choiceBtn.addEventListener('click', storeAnswer);

}



/*Get Question from questions object */
function questionObj(qIndex) {
    console.log(qIndex);
    event.preventDefault()
    event.stopPropagation();
    createQuestion = document.createElement('h2');
    var q = questions[qIndex].question;
    createQuestion.innerText = q;
    questionDiv.appendChild(createQuestion);
    var a = questions[qIndex].choices.forEach(answer => {
        genBtn(answer);
    });

}

/*Generate Questions*/
function showQuestion(index) {
    event.stopPropagation();
    //console.log(index)
    qCont.show();
    answerCont.show()
    questCont.show();
    strtBtn.hide();
    if (index === questions.length) {
        finBtn.show();
        nextBtn.hide();
        prevBtn.show();
    } else if (index < questions.length && index > 0) {
        prevBtn.show();
        finBtn.hide();
        nextBtn.show();

    } else if (index === 0) {
        nextBtn.show();
        prevBtn.hide();
        finBtn.hide();
    }
    questionObj(index);

}

/* Function for Next Button */
function nextQ() {
    console.log(index);
    checkQ(1);
    if (index !== questions.length) {
        clearQuestions();
        console.log(index);
        showQuestion(index);
    } else if (index === questions.length) {

        nextBtn.hide();
        finBtn.show();
        console.log('stopped')
    }
    //  }
}

/* Function for Prev Button */
function prevQ() {
    clearQuestions();
    checkQ(-1);
    showQuestion(index);

}

/**Clears the question an answer div children to allow question and answers to populate again */
function clearQuestions() {
    prevBtn.hide();
    nextBtn.hide();
    answerCont.children().remove();
    questCont.children().remove();
}


/* API Configuration - Gets movie data and stores it in a function */
function fetchMovieData(mLength, mGenre, mwoGenre) {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d68384526c8f6fabc89f85ba5e6c3f5a&language=en-USZ&with_genres=${mGenre}&without_genres=${mwoGenre}&${mLength}=90`)
        .then((response) => { return response.json() })
        .then((data) => {

            /**Stores top 3 results in variable */

            movieRes = data.results.slice(0, 3);
            mNo = 0;
            for (m in movieRes) {


                var mvContainer = $('<div class="movie-recommendation col l4 m12"><div>');
                if (movieRes[m].poster_path === null) {
                    var mvposter = $(`<img class="poster" src="./assets/mv.png">`);
                }
                else {

                    var mvposter = $(`<img class="poster" src=${getMoviePoster(movieRes[m].poster_path)}>`);

                    console.log(getMoviePoster(movieRes[m].poster_path));
                }

                var mvtitle = $(`<h2 class="movie-title-h2 amber-text text-accent-4">${movieRes[m].title}</h2>`)
                var mposter = $('<div class="movie-title-div"></div>');
                resultsRow.append(mvContainer);
                mvContainer.append(mvtitle);
                mvContainer.append(mposter);
                mposter.append(mvposter);


                localStorage.setItem(`m${mNo}-title`, movieRes[m].title);
                localStorage.setItem(`m${mNo}-poster`, getMoviePoster(movieRes[m].poster_path));
                mNo++
            }

        })
}


/**Formats image path for the films poster */
function getMoviePoster(jpg) {
    return "https://image.tmdb.org/t/p/w500" + jpg;
}


/*Bored API Configuration - Gets a random activity from */
var getRanAct = function () {
    fetch('https://www.boredapi.com/api/activity/')
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data.activity) });
}

/**Create event listner for start button. Calls function that shows first question */
strtBtn.on('click', function () { showQuestion(index) });



/**Function for finish button that calls the Movie API */
finBtn.on('click', function () { finishQ() })
function finishQ() {
    clearQuestions();
    finBtn.hide();
    qCont.hide();
    fetchMovieData(localStorage.getItem("movieLen"), localStorage.getItem("movieGen"), localStorage.getItem("moviewoGen"));
}