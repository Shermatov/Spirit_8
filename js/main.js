$('.mob_menu_button').on('click', function () {
    $('.mob_menu').toggleClass('open_menu')
});


$('.list-item a').on('click', function () {
    $('.mob_menu').removeClass('open_menu')
});

$('.mob_menu_button').on('click', function () {
    $('.line1, #mob_menu_button').toggleClass('clck')
});


$('.mob_menu_button').on('click', function () {
    $('.line3').toggleClass('clck')
});

$('.list-item a').on('click', function () {
    $('.line1, #mob_menu_button, .line3').removeClass('clck')
});


// $('#team_carousel').owlCarousel({
//     navigation: false,
//     slideSpeed: 300,
//     paginationSpeed: 400,
//     loop:true,
//     autoHeight: true,
//     itemsCustom: [
//         [0, 1],
//         [450, 2],
//         [600, 2],
//         [700, 2],
//         [1000, 4],
//         [1200, 4],
//         [1400, 4],
//         [1600, 4]
//     ],
// });

$('.clients_list ').owlCarousel({
    loop:true,
    items:5
})
$('#clients_carousel').owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    itemsCustom: [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 2],
        [1000, 4],
        [1200, 5],
        [1400, 5],
        [1600, 5]
    ],
});


$('#testimonials_carousel').owlCarousel({
    items : 1,
    margin:10,
    autoHeight:true,
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
});
