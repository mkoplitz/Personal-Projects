$(document).ready(function() {
    $('.layout, .main, .footer').hide();
    $('.layout, #top, #undertop').fadeIn(800);
    setTimeout(function() {
        $('.top').fadeOut(800);
    }, 2500);
    setTimeout(function() {
        $('.main, .footer').fadeIn(1000);
    }, 3500);
});


/* Clicking each item in the navbar scrolls to that section */

function veryTop() {
    $('html, body').animate({
        scrollTop: $('.titlebar').offset().top
    }, 800);
}

function getStarted() {
    $('html, body').animate({
        scrollTop: $('.content').offset().top
    }, 800);
}

function news() {
    $('html, body').animate({
        scrollTop: $('.news').offset().top
    }, 800);
}

function footer() {
    $('html, body').animate({
        scrollTop: $('.footer').offset().top
    }, 800);
}