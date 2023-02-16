$(document).ready(function () {
    $(".home").on("click", function () {
        $(this).siblings("li").removeClass("active");
    });
    $(".services").on("click", function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings("li").removeClass("active");
        } else $(this).removeClass("active");
    });
    $(".features").on("click", function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings("li").removeClass("active");
        } else $(this).removeClass("active");
    });
    $(".resources").on("click", function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings("li").removeClass("active");
        } else $(this).removeClass("active");
    });
    $(".contact").on("click", function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings("li").removeClass("active");
        } else $(this).removeClass("active");
    });
});
