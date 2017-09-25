/* ====================================
   Onload functions
   ==================================== */

$(function() {
    $('.search-wrap .fa-search').click(function() {
        $(this).parent(".search-wrap").toggleClass("is-active");
    });
    var featuredslider = $('#featured-slider ul');
    featuredslider.bxSlider({
        prevText: '',
        nextText: '',
        auto: 1,
        // autoControls: true,
        onSlideAfter: function() {
            featuredslider.startAuto()
        }
    });
    $('#project ul').bxSlider({
        prevText: '',
        nextText: '',
        nextSelector: '#project-next1',
        prevSelector: '#project-prev1',
        pager: 0
    });
    // jquery ui slider range for price
    $("#filter-price").slider({
        range: true,
        min: 500,
        max: 10000,
        values: [1500, 8000],
        slide: function(event, ui) {
            $(".amount-price").val(ui.values[0] + " $ - " + ui.values[1] + " $");
        }
    });
    $(".amount-price").val($("#filter-price").slider("values", 0) + " $ - " + $("#filter-price").slider("values", 1) + " $");
});