$('.nav-trigger').click(function () {
    $(this).toggleClass('active');
    $("#main-list-div").toggleClass("show-list");
    $("#main-list-div").fadeIn();
});