
/*Move title and image containers* */
const m1 = $('#m-1');
const m2 = $('#m-2');
const m3 = $('#m-3');
const m1Img = $('#m-1-img');
const m2Img = $('#m-2-img');
const m3Img = $('#m-3-img');

/*Grabs titles from local storage* */
const m1Title = $('#m-1-title').text(localStorage.getItem("m0-title"))
const m2Title = $('#m-2-title').text(localStorage.getItem("m1-title"))
const m3Title = $('#m-3-title').text(localStorage.getItem("m2-title"))


/*Grabs movie poster img path from local storage* */
m1Img.attr('src', localStorage.getItem("m0-poster"))
m2Img.attr('src', localStorage.getItem("m1-poster"))
m3Img.attr('src', localStorage.getItem("m2-poster"))

/*Deletes saved movies* */
$('.remove-button').each(function (i) {
    $(this).on('click', function () {
        // console.log($(this));
        $(this).siblings('h2').empty();
        $(this).siblings('img').attr('src', '');
        localStorage.setItem(`m${i}-title`, '');
        localStorage.setItem(`m${i}-poster`, '');
        console.log(`m${i}-poster`, '');
    });
});

