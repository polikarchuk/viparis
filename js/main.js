'use strict';


var unorderList = document.getElementById("selected_options");
function checkBox() {
    $("input:checkbox").on("change", function(){
        var HTML = '';
        $('input:checkbox').each(function(){
            if(this.checked) {
                var textLabel = $(this).siblings("label").text();

                HTML += '<li>'+textLabel+'</li>'
            }
        });
        unorderList.innerHTML = HTML;

    })

}
checkBox();

$( document ).ready(function() {
    //slaider
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('select').niceSelect();

    //language
    var language = $('.language li');
    language.click(function(e){
        e.preventDefault();
        language.removeClass('active');
        $(this).addClass('active');
    });
    // scrollup
    var scrollup = document.getElementById("scrollup");
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(scrollup).fadeIn();

        } else {
            $(scrollup).fadeOut();
        }
    });
    $(scrollup).click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //menu add class active responsive
    $('.menu-mobile-btn ').click(function(e){
        e.preventDefault();
        $('.basic').addClass('active');
    });
    $('.menu-mobile-close').click(function(e){
        e.preventDefault();
        $('.basic').removeClass('active');
    });

    $('.show_felter').click(function(){
        $(".filter_wrapper").toggleClass('active');

    });



    //filtter aside
    $('.filtter a').on('click', f_acc);
    function f_acc( e){
        e.preventDefault();
        $('.filtter .show_option').not($(this).next()).slideUp(600);
        $(this).next().slideToggle(800);
    }



    //catalog_sort_view
    var offer = $(".offer")
    $('.show_one').click(function(){
        offer.addClass('active');
    });
    $('.show_two').click(function(){
        offer.removeClass('active');
    });
    //add class activa view_tile_list li
    var view_list = $('.view_tile_list li');
    view_list.click(function(){
        view_list.removeClass('active');
        $(this).addClass('active');
    });


    $('.down').click(function () {
        var input = $(this).parent().find('input');
        var count = parseInt(input.val()) - 1;
        count = count < 1 ? 1 : count;
        input.val(count);
        input.change();
        return false;
    });
    $('.up').click(function () {
        var input = $(this).parent().find('input');
        input.val(parseInt(input.val()) + 1);
        input.change();
        return false;
    });




    $('.tab_header a').click(function(e){
        e.preventDefault();
        var id = $(this).data('id');
        var parent = $(this).parents('body');
        $('.tab_header a').removeClass('active');
        $(this).addClass('active');
        parent.find('.content_box').removeClass('active');
        parent.find('#item_'+id).addClass('active');


    });


    //add class active basket
    $(".basket").click( function () {
        $(".basket_block").addClass("active")

    });
    //remove active basket
    $(document).click(function (event) {
        if ($(event.target).closest(".basket_wrapper").length) return;
        $(".basket_block").removeClass('active');
        event.stopPropagation();

    });








});