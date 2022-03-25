$(document).ready(function () {

    new WOW().init();
    
    // tab switcher
    $(".tabs_navigation").on("click", ".nav-item:not(.active)", function() {
        $(this).addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".history-tabs")
        .find(".content-item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });

    // report toggle open/close
    $(".report-item").on("click", ".sitcher", function(event) {
        $(this).parent().toggleClass("active");
    });
});